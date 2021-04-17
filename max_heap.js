class MaxHeap {
	constructor(size) {
		this.count = 0;
		this.heap = Array(size).fill(0, 0);
	}
	
	create(array) {
		if(array) {
			for(let i = 0; i < array.length; i++) {
				this.insert(array[i]);
			}
		}
	}
	
	display() {
		console.log(this.heap);
	}
	
	insert(i) {
		if(this.count === 0) {
			this.heap[0] = i;
			this.count = 1;
		} else {
			this.heap[this.count++] = i;
			this.siftUp();
		}
	}
	
	siftUp() {
		let tmpPos = this.count - 1;
		let tmp = Math.floor(tmpPos / 2);
		while(tmpPos > 0 && this.heap[tmp] < this.heap[tmpPos]) {
			this.swap(tmpPos, tmp);
			tmpPos = Math.floor(tmpPos / 2);
			tmp = Math.floor(tmpPos / 2);
		}
	}
	
	extractMax() {
		let min = this.heap[0];
		this.heap[0] = this.heap[this.count - 1];
		this.heap[this.count - 1] = 0;
		this.count--;
		this.siftDown(0);
		return min;
	}
	
	siftDown(k) {
		let largest = k;
		let left = 2 * k + 1;
		let right = 2 * k + 2;
		if(left < this.count && this.heap[largest] < this.heap[left]) {
			largest = left;
		}
		if(right < this.count && this.heap[largest] < this.heap[right]) {
			largest = right;
		}
		if(largest != k) {
			this.swap(k, largest);
			this.siftDown(largest);
		}
	}
	swap(a, b) {
		let tmp = this.heap[a];
		this.heap[a] = this.heap[b];
		this.heap[b] = tmp;
	}
}

class PriorityQ extends MaxHeap {
	constructor() {
		super();
	}
	enqueue(val) {
		this.insert(val);
	}
	dequeue() {
		return this.extractMax();
	}
}

let numbers = [37, 44, 34, 65, 26, 86, 129, 83, 9];
let pq = new PriorityQ(numbers.length);
for(let i = 0; i < numbers.length; i++) {
	pq.enqueue(numbers[i]);
}
console.log('Constructed Heap');
pq.display();
console.log('Dequeued: ' + pq.dequeue());
pq.display();
console.log('Dequeued: ' + pq.dequeue());
pq.display();
console.log('Dequeued: ' + pq.dequeue());
pq.display();
console.log('Dequeued: ' + pq.dequeue());
pq.display();
console.log('Dequeued: ' + pq.dequeue());
pq.display();
console.log('Dequeued: ' + pq.dequeue());
pq.display();