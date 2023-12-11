export const getDate = (date: string): string => {
  const _date = new Date(date);
  const yyyy = _date.getFullYear();
  const mm = _date.getMonth() + 1;
  const dd = _date.getDate();
  return `${yyyy}-${mm}-${dd}`;
};

export const getCompareDate = (date: string): boolean => {
  const _date = new Date(date);
  const _now = new Date();
  if (_now.getFullYear() === _date.getFullYear()) {
    if (_now.getMonth() === _date.getMonth()) {
      if (_now.getDate() - _date.getDate() <= 1) {
        return true;
      }
    }
    return false;
  }
  return false;
};
