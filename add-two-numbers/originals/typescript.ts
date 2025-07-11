// Runtime: 170ms (Beats 5.03%)
// Memory: 66.32MB (Beats 5.22%)

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

const unwrapListNode = (list: ListNode, currentVal = '') => {
    console.log("LIST: ", list)
    if (list.next) {
        currentVal = unwrapListNode(list.next, currentVal)
    }
    currentVal += list.val

    return currentVal
}

const convertNumToReversedListNode = (num: BigInt, listNode: ListNode = {val: 0, next: null}) => {
    const digits = num.toString().split('')
    let obj: ListNode = {val: Number(digits[0]), next: null}
    let obj2: ListNode = {val: 0, next: null}
    for(let i = 1; i < digits.length; i++) {
        obj2.next = obj
        obj = {val: Number(digits[i]), next: obj2.next}
    }
    
    return obj
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    // Convert ListNodes to unreversed BigInts (maximum number size is too small to use Number)
    const num1 = BigInt(unwrapListNode(l1))
    const num2 = BigInt(unwrapListNode(l2))
    
    // Perform Addition
    const total = num1 + num2
    
    // Recreate ListNode
    return convertNumToReversedListNode(total)
};