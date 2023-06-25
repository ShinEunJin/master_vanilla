class Publisher {
  constructor(state) {
    this.observers = new Set();
    this.state = state;

    Object.keys(state).forEach((key) => {
      Object.defineProperty(this, key, {
        get() {
          return this.state[key];
        },
      });
    });
  }

  register(subscribe) {
    this.observers.add(subscribe);
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.notify();
  }

  notify() {
    this.observers.forEach((fn) => fn());
  }
}

class Subscriber {
  constructor(fn) {
    this.fn = fn;
  }

  subscribe(publisher) {
    publisher.register(this.fn);
  }
}

const $input = document.querySelector("#test-input");
const $list1 = document.querySelector(".list-1");
const $list2 = document.querySelector(".list-2");
const $list3 = document.querySelector(".list-3");

const publisher = new Publisher({ price: 0 });

const subscriberList1 = new Subscriber(() => {
  $list1.innerText = +$list1.dataset.price * publisher.price;
});
subscriberList1.subscribe(publisher);

const subscriberList2 = new Subscriber(() => {
  $list2.innerText = +$list2.dataset.price * publisher.price;
});
subscriberList2.subscribe(publisher);

const subscriberList3 = new Subscriber(() => {
  $list3.innerText = +$list3.dataset.price * (publisher.price || 0);
});
subscriberList3.subscribe(publisher);

$input.addEventListener("change", (e) => {
  publisher.setState({ price: e.target.value });
});
