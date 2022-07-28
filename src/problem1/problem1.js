var sum_to_n_a = function(n) {
	let sum = 0;
    for (let i = 0; i < n+1; i++) {
        sum += i;
      }
  	return sum;
};

var sum_to_n_b = function(n) {
    let sum = 0;
    let i = 1;
    while (n != 0){
    	sum += i;
        i++;
        n--;}
  	return sum;
};

var sum_to_n_c = function(n) {
    let sum = 0;
    let i = 1;
    while (i < n+1){
    	sum += i;
        i++;
    }
  	return sum;
};