import Vue from "vue";
import Home from "../pages/Home";

describe("Home.test.js", () => {
  let cmp, vm;

  beforeEach(() => {
    cmp = Vue.extend(Home);
    vm = new cmp({
      data: {
        messages: ["Cat"]
      }
    }).$mount();
  });

  it('equals messages to ["Cat"]', () => {
    expect(vm.messages).toEqual(["Cat"]);
  });
});
