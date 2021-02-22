import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'pretest-refinitive';
  input: string = ''
  method: string = 'isPrime'
  result: boolean

  constructor() { }

  /**
   * inputController
   */
  public inputController(e) {
    if (+this.input != 0 && this.input != '' && !+this.input) {
      this.input = '1'
    } 
    this.result = this.calculate()
  }

  public isFibonacci(x: number) {
    if (!+x) return false
    x = Math.round(x)
    return this.isPerfectSquare(5 * (x ** 2) + 4) || this.isPerfectSquare(5 * (x ** 2) - 4)
  }

  public isPerfectSquare(n: number) {
    let sqr = Math.floor(n ** (1 / 2))
    return sqr ** 2 == n
  }

  public isPrime(x: number) {
    if (+x == 2 || +x == 3) return true
    if (!+x || +x == 1 || +x % 2 == 0) return false
    x = Math.round(x)
    let rootX = Math.floor(x ** (1 / 2))
    for (let i = 3; i <= rootX; i++) {
      if (x % i == 0) {
        return false
      }
    }
    return true
  }
  public selectChange(e) {
    this.method = e.target.value
    this.result = this.calculate()
  }

  public calculate() {
    if (this.method == 'isPrime') {
      return this.isPrime(+this.input)
    } else if (this.method == 'isFibonacci') {
      return this.isFibonacci(+this.input)

    }
  }

}
