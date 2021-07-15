/* 
The default order is increasing, if we set heap(false), that means
the heap is decreasing
*/

class Heap{
    constructor(order = true) {
        this.order = order
        this.list=[]
    }

    add = (num) => {
        this.list.push(num)
        const m = Math.floor((this.list.length - 1) / 2)
        const func = this.order ? this.MaxHeapify : this.MinHeapify
        for (let i = m; i >= 0; i--) {
            func(i)
        }
    }

    swap =  (i, j) => {
        const temp=this.list[i]
        this.list[i]=this.list[j]
        this.list[j]=temp
    }
    MaxHeapify=(i)=>{
        const n=this.list.length
        if(i>=n) return
        const i1=2*i+1
        const i2=2*i+2
        let max=i
        if(i1<n && this.list[i1]>this.list[max]){
            max=i1
        }
        if(i2<n && this.list[i2]>this.list[max]){
            max=i2
        }
        if(max != i){
            this.swap( max, i)
            this.MaxHeapify( max)
        }
    }
    MinHeapify=(i)=>{
        const n=this.list.length
        if(i>=n) return
        const i1=2*i+1
        const i2=2*i+2
        let min=i
        if(i1<n && this.list[i1]<this.list[min]){
            min=i1
        }
        if(i2<n && this.list[i2]<this.list[min]){
            min=i2
        }
        if(min != i){
            this.swap(min, i)
            this.MinHeapify(min)
        }
    }

    heapSort = () => {
        const func = this.order ? this.MaxHeapify : this.MinHeapify
        let tempList=[]
        for (let i = this.list.length; i > 0; i--) {
            const m = Math.floor((i - 1) / 2)
            for (let j = m; j >= 0; j--) {
                func(j)
            }
            tempList.unshift(this.list.shift())
        }
        this.list=tempList
    }

    print = () => {
        return this.list
    }
}

let h = new Heap()
h.add(3)
h.add(5)
h.add(2)
console.log(h.print())
h.add(1)
h.add(4)
h.heapSort()
console.log(h.print())
console.log('--------------------------')
let h2 = new Heap(false)
h2.add(3)
h2.add(5)
h2.add(2)
console.log(h2.print())
h2.add(1)
h2.add(4)
h2.heapSort()
console.log(h2.print())

