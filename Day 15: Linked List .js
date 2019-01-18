function Solution(){

	this.insert=function(head,data){
        //complete this method
        if (head == null)
            return new Node(data)
        head.next = this.insert(head.next, data)
        return head
    };
    //End of my solution

	this.display=function(head){
        var start=head;
            while(start){
                process.stdout.write(start.data+" ");
                start=start.next;
            }
    };
}