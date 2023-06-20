/* Well met with Fibonacci bigger brother, AKA Tribonacci.

As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

[1, 1 ,1, 3, 5, 9, 17, 31, ...]
But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;) */

/* const tribonacci = (signature, n) => {
    for (let i = signature.length; i < n; i++) {
      signature.push(signature.slice(i - 3).reduce((a, b) => a + b,0));
    }
    return signature.slice(0, n);
  }; */

/* const tribonacci = (signature, n) => {
  if (n < signature.length) return signature.slice(0, n);
  const sequence = [...signature];
  for (let i = signature.length; i < n; i++) {
    const sum = sequence[i - 1] + sequence[i - 2] + sequence[i - 3];
    sequence.push(sum);
  }
  return sequence;
}; */

/* const tribonacci = (signature, n) => {
  if (n < signature.length) return signature.slice(0, n);
  const sequence = [...signature];
  [...Array(n - signature.length)].map((_, i) => {
    const sum =
      sequence[i + signature.length - 1] +
      sequence[i + signature.length - 2] +
      sequence[i + signature.length - 3];
    sequence.push(sum);
  });
  return sequence;
}; */

const tribonacci = (signature, n) => {
  if (n < signature.length) return signature.slice(0, n);
  const sequence = [...signature];
  for (let i = sequence.length; i < n; i++) {
    const sum = sequence[i - 1] + sequence[i - 2] + sequence[i - 3];
    sequence.push(sum);
  }
  return sequence;
};

console.log(tribonacci([1, 1, 1], 10));

/* const tribonacci = (signature, n) => {
  Array.from({ length: n - signature.length }, (_, i) =>
    signature.push(signature.slice(i, i + 3).reduce((a, b) => a + b, 0))
  );
  return signature.slice(0, n);
};

console.log(tribonacci([1, 1, 1], 10)); */

/* const fibonacci = (signature, n) => {
  if (n < signature.length) return signature.slice(0, n);
  const sequence = [...signature];
  for (let i = signature.length; i < n; i++) {
    const sum = sequence[i - 1] + sequence[i - 2];
    sequence.push(sum);
  }
  return sequence;
}; */

console.log(fibonacci([1, 1], 10));
