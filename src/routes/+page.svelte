<script>
import Problem from '../components/Problem.svelte';
import A4 from '../components/A4.svelte';

import { onMount } from 'svelte';

import { default as QRious } from 'qrious';

export let data;

function randomDigitInt(n){
  let min = 10**(n-1);
  let max = 10**(n)-1;
  return Math.floor(Math.random() * (max-min+1)) + min;
}

function generateProblem(){
  return {
    operand1: randomDigitInt(6), 
    operand2: randomDigitInt(6),
    operator: "+"
  };
}

function generateProblems(n){
  return Array(n).fill().map(x=>generateProblem());
}

let values = generateProblems(30);
let value;

function encodeProblems(problems){
	let result = "";
	problems.forEach((p, i)=>{
		result+=p.operand1.toString(16);
		result+=p.operator;
		result+=p.operand2.toString(16);
		if (i!=problems.length-1) result+=".";
	});
	return result;
}

let encoded = data.origin+"/answer?"+encodeProblems(values);

onMount(()=>{
	const qr = new QRious({
		element: document.getElementById('qr'),
		size: 170,
		value: encoded,
	});
});

</script>
<div class="qr-container">
<img id="qr" />
</div>

<A4>
  {#each values as value}
  <Problem problem={value} showAnswer={false}/>
  {/each}
</A4>

<style>
.qr-container {
	display: flex;
	justify-content: flex-end;
}
</style>
