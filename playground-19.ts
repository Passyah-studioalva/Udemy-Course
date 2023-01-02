/* [AI] VOID TYPE */

/* 
void is not an alias for undefined and
an expression of type void may have any value,
not just undefined
*/

/* 
void is used to not make any assumptions about the function's return value,
simply declaring that not going to use that value.
*/

// ! NO RECOMENDED
/* Example any */
type Noop1 = () => any;

// * RECOMENDED
/* Example void */
type Noop2 = () => void;

export default function play19() {
  /* Result example any */
  function fn1(x: Noop1): void {
    const result = x();
    result();
  }

  /* Result xample void */
  function fn2(x: Noop2): void {
    const result = x();
    // result();
  }
}
