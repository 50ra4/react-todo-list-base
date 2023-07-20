import { scoreInputSchema } from './score';

describe('scoreInputSchema', () => {
  it('点数が未入力である場合、エラーを返却', () => {
    expect(() => scoreInputSchema.parse('')).toThrowError();
  });
  it('入力した値が整数でない場合、エラーを返却', () => {
    expect(() => scoreInputSchema.parse('hoge')).toThrowError();
    expect(() => scoreInputSchema.parse('99.1')).toThrowError();
  });
  it('点数が100点より大きい場合、エラーを返却', () => {
    expect(() => scoreInputSchema.parse('100')).not.toThrowError();
    expect(() => scoreInputSchema.parse('101')).toThrowError();
  });
  it('点数が10点より小さい場合、エラーを返却', () => {
    expect(() => scoreInputSchema.parse('10')).not.toThrowError();
    expect(() => scoreInputSchema.parse('9')).toThrowError();
  });
  it('10点単位でない場合、エラーを返却', () => {
    expect(() => scoreInputSchema.parse('10')).not.toThrowError();
    expect(() => scoreInputSchema.parse('11')).toThrowError();
  });
  it('全角数字は半角数字に変換した値を返却する', () => {
    const actual = scoreInputSchema.parse('１００');
    expect(actual).toBe(100);
  });
});
