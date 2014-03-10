/**
 * Description:
 * Author: jiangfeng(jiang.f@ctrip.com)
 * Date: 2014-03-07 14:48
 *
 */

describe("A suite of jasmine", function(){
  it("Expectations", function(){
    expect("AAA").toEqual("AAA");
  });
  it("expect null", function(){
    expect(null).toBeNull();
  });
  it("toBetrue", function(){
    expect(true).toBe(true);
  });
  it("not to be true", function(){
    expect(false).not.toBe(true);
  });
  var b;
  it("b not to be defined", function(){
    expect(b).not.toBeDefined();
  });
  var c = "foo"
  it("c to be defined", function(){
    expect(c).toBeDefined();
  });
  var arr = ['foo', 'bar', 'baz']
  it("arr contain foo", function(){
    expect(arr).toContain("foo");
  });
  it("arr not contain abcd", function(){
    expect(arr).not.toContain("abcd");
  });

  var pi = 3.14159, e = 2.78;
  it("less than", function(){
    expect(e).toBeLessThan(pi);
    expect(pi).not.toBeLessThan(e);
  })
});