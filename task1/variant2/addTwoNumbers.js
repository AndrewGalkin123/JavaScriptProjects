
var addTwoNumbers = function(l1, l2) {
    var first = [l1.val], second = [l2.val];
    var node1 = l1.next, node2 = l2.next;
    while(node1){
        first.unshift(node1.val);
        node1 = node1.next;
    }
    while(node2){
        second.unshift(node2.val);
        node2 = node2.next;
    }
    const res = (BigInt(first.join(``)) + BigInt(second.join(``))).toString();
    return res.split(``).slice(1).reduce((head, val) => new ListNode(val, head), new ListNode(res[0]));
};
console.log(addTwoNumbers([5,2,2],[7,1,7]));