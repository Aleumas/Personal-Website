# XOR

## XOR In Natural Language

If person A were to ask you: "Do you like hotdogs **or** hamburgers?"; you could respond with "hotdogs", "hamburgers", or "both". If person B were to ask you: "Is that a bird **or** a plane?"; you could respond with either "a bird" or "a plane" but not both. Depending on the context in which "or" is being used, its meaning can change. Machine logic can not translate this ambiguity, hence why there are two types of "or": "inclusive or" (shown with person A's question) and "exclusive or" (shown with person B's question). 

## Interpretations

1. A XOR B is true if and only if either A or B is true but not both.
2. A XOR B represents the difference between A and B (i.e., where A differs from B, A XOR B is true).
3. A_1 XOR A_2 ... XOR A_n = 1 if and only if the parity of set bits within the bit sequence is odd.

## Properties

- Associativity: (A XOR B) XOR C = A XOR (B XOR C); i.e., the grouping of operations does not affect the result (first interpretation).
- Commutativity: A XOR B = B XOR A; i.e., the order of terms does not affect the result (first interpretation).
- Identity: A XOR 0 = A (second interpretation).
- Inverse: A XOR A = 0 (second interpretation).

## Applications 

- The third interpretation of XOR lends itself to data protection and error-checking applications. For instance, a data manager could perform XOR between one disk and a redundant disk to identify corrupted data. 
- The second interpretation of XOR lends itself to data encryption. For instance, a cryptographer could use the following derived property: A XOR B XOR B = A (combination between the inverse and identity properties) to encrypt messages.  

## Sources

- [https://accu.org/journals/overload/20/109/lewin_1915/](https://accu.org/journals/overload/20/109/lewin_1915/)