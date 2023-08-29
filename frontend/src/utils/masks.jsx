export function MaskCellphone(value) {
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{0})(\d)/, '$1($2');
    value = value.replace(/(\d{2})(\d)/, '$1)$2');
    value = value.replace(/(\d{5})(\d{1,2})/, '$1-$2');
    value = value.replace(/(-\d{4})\d+?$/, '$1');

    return value
}