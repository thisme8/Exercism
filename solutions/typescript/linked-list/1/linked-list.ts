class Node<T> {
  constructor(
    public value: T,
    public prev: Node<T> | null = null,
    public next: Node<T> | null = null
  ) {}
}

export class LinkedList<TElement> {
  private head: Node<TElement> | null = null
  private tail: Node<TElement> | null = null
  private size = 0

  public push(element: TElement) {
    const node = new Node(element, this.tail, null)
    if (!this.head) {
      this.head = node
    }
    if (this.tail) {
      this.tail.next = node
    }
    this.tail = node
    this.size++
  }

  public pop(): TElement | undefined {
    if (!this.tail) return undefined
    const value = this.tail.value
    this.tail = this.tail.prev
    if (this.tail) this.tail.next = null
    else this.head = null
    this.size--
    return value
  }

  public unshift(element: TElement) {
    const node = new Node(element, null, this.head)
    if (!this.tail) this.tail = node
    if (this.head) this.head.prev = node
    this.head = node
    this.size++
  }

  public shift(): TElement | undefined {
    if (!this.head) return undefined
    const value = this.head.value
    this.head = this.head.next
    if (this.head) this.head.prev = null
    else this.tail = null
    this.size--
    return value
  }

  public delete(element: TElement) {
    let current = this.head
    while (current) {
      if (current.value === element) {
        if (current.prev) current.prev.next = current.next
        else this.head = current.next

        if (current.next) current.next.prev = current.prev
        else this.tail = current.prev

        this.size--
        return
      }
      current = current.next
    }
  }

  public count(): number {
    return this.size
  }
}
