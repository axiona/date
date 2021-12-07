import Return from "@dikac/t-validator/validatable/simple";
import Value from "@dikac/t-value/value";
import Instance from "@dikac/t-validator/validatable/validatable";
import MessageValidatable from "@dikac/t-validator/message/function/validatable-parameter";
import DateMessage from "../assert/string/compatible-parameter";
import CompatibleParameters from "./compatible-parameters";
import Message from "@dikac/t-message/message";

export type DateParameterArgument<MessageT, Argument> = Value<Argument> & Partial<Message<MessageT>>;

export default function CompatibleParameter<Argument>(
    //value : Argument,
    {
        value,
       // message,
    } : Value<Argument>
) : Return<Argument, globalThis.Date|string|number, Readonly<Instance<Argument, string>>>;

export default function CompatibleParameter<MessageT, Argument>(
    // value : Argument,
    // message : MessageValidatable<Argument, MessageT>,
    {
        value,
        message,
    } : Value<Argument> & Message<MessageValidatable<Argument, MessageT>>
) : Return<Argument, globalThis.Date|string|number, Readonly<Instance<Argument, MessageT>>>;

export default function CompatibleParameter<MessageT, Argument>(
    // value : Argument,
    // message : MessageValidatable<Argument, MessageT> = DateMessage,
    {
        value,
        message = DateMessage,
    } : Value<Argument> & Message<MessageValidatable<Argument, MessageT|string>>

) : Return<Argument, globalThis.Date|string|number, Readonly<Instance<Argument, MessageT|string>>> {

    return CompatibleParameters(value, (value, valid) => message({value, valid}));
}
