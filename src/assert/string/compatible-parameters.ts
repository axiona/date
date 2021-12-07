/**
 * string intended for not Date message
 *
 * @param valid
 * @param value
 * @param subject
 */
export default function CompatibleParameters(
    value : unknown,
    valid : boolean,
    subject : string = 'type',
) : string {

    const strings : string[] = [];

    strings.push(subject);

    if(valid) {

        strings.push('must compatible with');

    } else {

        strings.push('is compatible with');

    }

    strings.push('Date');

    return strings.join(' ') + '.';
}