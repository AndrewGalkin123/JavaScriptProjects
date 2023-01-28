function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
var mergeTwoLists = function(list1, list2) {
    var node1 = list1.next, node2 = list2.next;
    var first = [list1.val], second = [list2.val];
    console.log(list1);
    console.log(list2);
    console.log(first)
    while(node1){
      first.push(node1);
      node1 = node1.next;
    }
    while(node2){
        second.push(node1);
        node2 = node2.next;
    }
    var res;
    for (let i = 0; i < list1.length; i++) {
        res += first;

        console.log(res);
    }

}
mergeTwoLists([1,2,4],[1,3,4]);

