﻿//四、冒泡排序

//1）算法简介

//冒泡排序是一种简单的排序算法。它重复地走访过要排序的数列，一次比较两个元素，如果它们的顺序错误就把它们交换过来。走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。这个算法的名字由来是因为越小的元素会经由交换慢慢“浮”到数列的顶端。

//2）算法描述和实现

//具体算法描述如下：

//比较相邻的元素。如果第一个比第二个大，就交换它们两个；
//对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数；
//针对所有的元素重复以上的步骤，除了最后一个；
//重复步骤1~3，直到排序完成。
//JavaScript代码实现：

function BubbleSort(array) {
    if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
        var len = array.length, temp;
        for (var i = 0; i < len - 1; i++) {
            for (var j = len - 1; j >= i; j--) {
                if (array[j] < array[j - 1]) {
                    temp = array[j];
                    array[j] = array[j - 1];
                    array[j - 1] = temp;
                }
            }
        }
        return array;
    } else {
        return 'array is not an Array!';
    }
}
//3）算法分析

//最佳情况：T(n) = O(n)
//最差情况：T(n) = O(n2)
//平均情况：T(n) = O(n2)