var app = new Vue({
	el: '#app',
	data: {
		items: [
			{
				ttl: "Q.1",
				question: "可読性・汎用性の高い、運用しやすいコードとは？",
				answers: [
					{ choices: "1. わかりやすい", id: "1" },
					{ choices: "2. 探しやすい", id: "2" },
					{ choices: "3. 再利用しやすい", id:"3" },
					{ choices: "4. 拡張しやすい", id:"4" }
				],
				correct: [1, 3, 4]
			},
			{
				ttl: "Q.2",
				question: "可読性・汎用性の高い、運用しやすいコードとは？",
				answers: [
					{ choices: "1. わかりやすい", id: "1" },
					{ choices: "2. 探しやすい", id: "2" },
					{ choices: "3. 再利用しやすい", id:"3" },
					{ choices: "4. 拡張しやすい", id:"4" }
				]
			},
			{
				ttl: "Q.3",
				question: "可読性・汎用性の高い、運用しやすいコードとは？",
				answers: [
					{ choices: "1. わかりやすい", id: "1" },
					{ choices: "2. 探しやすい", id: "2" },
					{ choices: "3. 再利用しやすい", id:"3" },
					{ choices: "4. 拡張しやすい", id:"4" }
				]
			},
			{
				ttl: "Q.4",
				question: "可読性・汎用性の高い、運用しやすいコードとは？",
				answers: [
					{ choices: "1. わかりやすい", id: "1" },
					{ choices: "2. 探しやすい", id: "2" },
					{ choices: "3. 再利用しやすい", id:"3" },
					{ choices: "4. 拡張しやすい", id:"4" }
				]
			},
			{
				ttl: "Q.5",
				question: "可読性・汎用性の高い、運用しやすいコードとは？",
				answers: [
					{ choices: "1. わかりやすい", id: "1" },
					{ choices: "2. 探しやすい", id: "2" },
					{ choices: "3. 再利用しやすい", id:"3" },
					{ choices: "4. 拡張しやすい", id:"4" }
				]
			},
			{
				ttl: "Q.6",
				question: "可読性・汎用性の高い、運用しやすいコードとは？",
				answers: [
					{ choices: "1. わかりやすい", id: "q1" },
					{ choices: "2. 探しやすい", id: "q2" },
					{ choices: "3. 再利用しやすい", id:"q3" },
					{ choices: "4. 拡張しやすい", id:"q4" }
				]
			},
			{
				ttl: "Q.7",
				question: "可読性・汎用性の高い、運用しやすいコードとは？",
				answers: [
					{ choices: "1. わかりやすい", id: "1" },
					{ choices: "2. 探しやすい", id: "2" },
					{ choices: "3. 再利用しやすい", id:"3" },
					{ choices: "4. 拡張しやすい", id:"4" }
				]
			},
			{
				ttl: "Q.8",
				question: "可読性・汎用性の高い、運用しやすいコードとは？",
				answers: [
					{ choices: "1. わかりやすい", id: "1" },
					{ choices: "2. 探しやすい", id: "2" },
					{ choices: "3. 再利用しやすい", id:"3" },
					{ choices: "4. 拡張しやすい", id:"4" }
				]
			},
			{
				ttl: "Q.9",
				question: "可読性・汎用性の高い、運用しやすいコードとは？",
				answers: [
					{ choices: "1. わかりやすい", id: "1" },
					{ choices: "2. 探しやすい", id: "2" },
					{ choices: "3. 再利用しやすい", id:"3" },
					{ choices: "4. 拡張しやすい", id:"4" }
				]
			},
			{
				ttl: "Q.10",
				question: "可読性・汎用性の高い、運用しやすいコードとは？",
				answers: [
					{ choices: "1. わかりやすい", id: "1" },
					{ choices: "2. 探しやすい", id: "2" },
					{ choices: "3. 再利用しやすい", id:"3" },
					{ choices: "4. 拡張しやすい", id:"4" }
				]
			},
			{
				ttl: "Q.11",
				question: "可読性・汎用性の高い、運用しやすいコードとは？",
				answers: [
					{ choices: "1. わかりやすい", id: "1" },
					{ choices: "2. 探しやすい", id: "2" },
					{ choices: "3. 再利用しやすい", id:"3" },
					{ choices: "4. 拡張しやすい", id:"4" }
				]
			},
			{
				ttl: "Q.12",
				question: "可読性・汎用性の高い、運用しやすいコードとは？",
				answers: [
					{ choices: "1. わかりやすい", id: "1" },
					{ choices: "2. 探しやすい", id: "2" },
					{ choices: "3. 再利用しやすい", id:"3" },
					{ choices: "4. 拡張しやすい", id:"4" }
				]
			},
			{
				ttl: "Q.13",
				question: "可読性・汎用性の高い、運用しやすいコードとは？",
				answers: [
					{ choices: "1. わかりやすい", id: "q1" },
					{ choices: "2. 探しやすい", id: "q2" },
					{ choices: "3. 再利用しやすい", id:"q3" },
					{ choices: "4. 拡張しやすい", id:"q4" }
				]
			},
			{
				ttl: "Q.14",
				question: "可読性・汎用性の高い、運用しやすいコードとは？",
				answers: [
					{ choices: "1. わかりやすい", id: "q1" },
					{ choices: "2. 探しやすい", id: "q2" },
					{ choices: "3. 再利用しやすい", id:"q3" },
					{ choices: "4. 拡張しやすい", id:"q4" }
				]
			},
			{
				ttl: "Q.15",
				question: "可読性・汎用性の高い、運用しやすいコードとは？",
				answers: [
					{ choices: "1. わかりやすい", id: "1" },
					{ choices: "2. 探しやすい", id: "2" },
					{ choices: "3. 再利用しやすい", id:"3" },
					{ choices: "4. 拡張しやすい", id:"4" }
				]
			}
		]
	}
});
