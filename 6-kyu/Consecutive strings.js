function longestConsec(strarr, k) {
    if (strarr.length == 0 || k > strarr.length || k <= 0) return '';
    return get(strarr, k);
}
function get(strarr, k) {
    var temp = '', answer = '';
    for (var i = 0; i < k; i++) answer += strarr[i];
    temp = answer;
    for (var i = k; i < strarr.length; i++) {
        temp = temp.replace(strarr[i - k], '') + strarr[i];
        temp.length > answer.length ? answer = temp : answer = answer;
    }
    return answer;
}