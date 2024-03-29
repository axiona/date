import AssertCompatible from '../assert/compatible.js';
import CompatibleError from '../assert/throwable/compatible.js';
import Value from '@axiona/value/value.js';
import CompatibleType from '../compatible.js';

export function CompatibleParameters(
    value : unknown,
    error : (value:unknown)=>Error = CompatibleError.Parameters
) : CompatibleType  {

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
) : CompatibleType  {

    return CompatibleParameters(value, error);
}


namespace Compatible {
    export const Parameters = CompatibleParameters;
    export const Parameter = CompatibleParameter;
}
export default Compatible;
