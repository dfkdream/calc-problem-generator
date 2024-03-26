<script>
import Problem from '../../components/Problem.svelte';
import A4 from '../../components/A4.svelte';

import { page } from '$app/stores';
import { onMount } from 'svelte';

const operators = ["+"];

function parseProblems(str){
	let result = [];

	str.split(".").forEach(ps=>{
		operators.forEach(op=>{
			let splitted = ps.split(op);
			if (splitted.length == 2) {
				result = [...result, {
					operand1: parseInt(splitted[0], 16),
					operand2: parseInt(splitted[1], 16),
					operator: op
				}];
			}
		});
	});

	return result;
}

let problems = [];
let problem;

onMount(()=>{
	problems = parseProblems($page.url.searchParams.toString());
});
</script>

<A4>
	{#each problems as problem}
	<Problem problem={problem} showAnswer={true}/>
	{/each}
</A4>
