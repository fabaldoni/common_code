"use strict";


exports.insertSort = function (list, comparer) {

    for (var i = 1; i < list.length; i++) {
        var currentItem = list[i];
        for (var j = 0; j < i; j++) {

            if (comparer(list[j], currentItem) > 0) {

                for (var k = i - 1; k >= j; k--) {
                    list[k + 1] = list[k];
                }
                list[j] = currentItem;
                break;
            }
        }
    }
    return list;
};


