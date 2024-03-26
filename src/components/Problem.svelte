<script>
	export let problem;
	export let showAnswer = false;
</script>

<div>
	<span>{problem.operand1}</span>
	<span class="operator-line">
		<span>{problem.operator}</span>
		<span>{problem.operand2}</span>
	</span>
	<span class="answer">
		{#if showAnswer}
			{problem.operand1+problem.operand2}
		{/if}
	</span>
</div>

<style>
div {
	display: flex;
	flex-direction: column;
	margin: 2em 1em 2em 1em;
}

div * {
	text-align: end;
}

span{
	text-wrap: nowrap;
}

span.operator-line{
	display: flex;
	justify-content: space-between;
}

span.answer{
	//height: 1em;
	border-top: 2px solid black;
}
</style>
