import { PrintItemKind, Info, Condition, Signal, PrintItemIterable } from "@dprint/types";
import { conditionResolvers } from "./conditionResolvers";
import { makeIterableRepeatable } from "../utils";
import { parserHelpers } from "./parserHelpers";

const { withIndent } = parserHelpers;

/** A collection of reusable conditions. */
export namespace conditions {
    export interface NewlineIfHangingSpaceOtherwiseOptions {
        startInfo: Info;
        endInfo?: Info;
        spaceChar?: " " | Signal.SpaceOrNewLine;
    }

    export function newlineIfHangingSpaceOtherwise(options: NewlineIfHangingSpaceOtherwiseOptions): Condition {
        const { startInfo, endInfo, spaceChar = " " } = options;
        return {
            kind: PrintItemKind.Condition,
            name: "newLineIfHangingSpaceOtherwise",
            condition: conditionContext => {
                return conditionResolvers.isHanging(conditionContext, startInfo, endInfo);
            },
            true: [Signal.NewLine],
            false: [spaceChar]
        };
    }

    export interface NewlineIfMultipleLinesSpaceOrNewlineOtherwiseOptions {
        startInfo: Info;
        endInfo?: Info;
    }

    export function newlineIfMultipleLinesSpaceOrNewlineOtherwise(options: NewlineIfMultipleLinesSpaceOrNewlineOtherwiseOptions): Condition {
        const { startInfo, endInfo } = options;
        return {
            name: "newlineIfMultipleLinesSpaceOrNewlineOtherwise",
            kind: PrintItemKind.Condition,
            condition: conditionContext => conditionResolvers.isMultipleLines(conditionContext, startInfo, endInfo || conditionContext.writerInfo, false),
            true: [Signal.NewLine],
            false: [Signal.SpaceOrNewLine]
        };
    }

    export function singleIndentIfStartOfLine(): Condition {
        return {
            kind: PrintItemKind.Condition,
            name: "singleIndentIfStartOfLine",
            condition: conditionResolvers.isStartOfNewLine,
            true: [Signal.SingleIndent]
        };
    }

    export function* indentIfStartOfLine(item: PrintItemIterable): PrintItemIterable {
        // need to make this a repeatable iterable so it can be iterated multiple times
        // between the true and false condition
        item = makeIterableRepeatable(item);

        yield {
            kind: PrintItemKind.Condition,
            name: "indentIfStartOfLine",
            condition: conditionResolvers.isStartOfNewLine,
            true: withIndent(item),
            false: item
        };
    }

    export function* withIndentIfStartOfLineIndented(item: PrintItemIterable): PrintItemIterable {
        // need to make this a repeatable iterable so it can be iterated multiple times
        // between the true and false condition
        item = makeIterableRepeatable(item);

        yield {
            kind: PrintItemKind.Condition,
            name: "withIndentIfStartOfLineIndented",
            condition: context => {
                return context.writerInfo.lineStartIndentLevel > context.writerInfo.indentLevel;
            },
            true: withIndent(item),
            false: item
        };
    }

    /**
     * This condition can be used to force the printer to jump back to the point
     * this condition exists at once the provided info is resolved.
     * @param info - Info to force reevaluation once resolved.
     */
    export function forceReevaluationOnceResolved(info: Info): Condition {
        return {
            kind: PrintItemKind.Condition,
            name: "forceReevaluationOnceInfoResolved",
            condition: conditionContext => {
                return conditionContext.getResolvedInfo(info) == null ? undefined : false;
            }
        };
    }
}