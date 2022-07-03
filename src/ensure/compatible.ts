import AssertCompatible from '../assert/compatible';
import CompatibleError from '../assert/throwable/compatible';
import Value from '@alirya/value/value';

export function CompatibleParameters(
    value : unknown,
    error : (value:unknown)=>Error = CompatibleError.Parameters
) : globalThis.Date|string|number  {

    AssertCompatible(value, error);

    return value;
}


export function CompatibleParameter(
    {
        value,
        error = CompatibleError.Parameter
    } : Value<unknown> & {
        error : (value:unknown)=>Error
    }
) : globalThis.Date|string|number  {

    return CompatibleParameters(value, error);
}


namespace Compatible {
    export const Parameters = CompatibleParameters;
    export const Parameter = CompatibleParameter;
}
export default Compatible;