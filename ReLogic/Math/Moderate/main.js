var theQs = [
    {
        qns: "1. Which list is in order from least to greatest?",
        ans: {
            a: '1,000; 1,010; 1,009',
            b: '1,010; 1,011; 1,100',
            c: '1,100; 1,010; 1,001',
            d: '1,010; 1,100; 1,001'
        },
        rightAns: 'b'
    },
    {
        qns: "2. Which is a composite number?",
        ans: {
            a: '5',
            b: '7',
            c: '19',
            d: '21'
        },
        rightAns: 'd'
    },
    {
        qns: "3. What is the value of 12-(3+5)",
        ans: {
            a: '4',
            b: '10',
            c: '14',
            d: '20'
        },
        rightAns: 'a'
    }
];
var qzContainer = document.getElementById('qz');
var ansContainer = document.getElementById('ans');
var subBtn = document.getElementById('sub');

disQuiz(theQs, qzContainer, ansContainer, subBtn);

function disQuiz(qcontainer, qzContainer, ansContainer, subBtn){

	function disQns(qcontainer, qzContainer){
		var result = [];
		var ans;

		for(var i=0; i<qcontainer.length; i++){
			
			ans = [];

			for(letter in qcontainer[i].ans){

				ans.push(
					'<label>'
						+ '<input type="radio" name="qns'+i+'" value="'+letter+'">'
						+ letter + ': '
						+ qcontainer[i].ans[letter]
					+ '</label>'
				);
			}

			result.push(
				'<div class="qns">' + qcontainer[i].qns + '</div>'
				+ '<div class="ans">' + ans.join('') + '</div>'
			);
		}

		qzContainer.innerHTML = result.join('');
	}


	function showResults(qcontainer, qzContainer, ansContainer){
		
		var ansContainers = qzContainer.querySelectorAll('.ans');
		
		var userAns = '';
		var numCorrect = 0;
		
		for(var i=0; i<qcontainer.length; i++){

			userAns = (ansContainers[i].querySelector('input[name=qns'+i+']:checked')||{}).value;
			
			if(userAns===qcontainer[i].rightAns){
				numCorrect++;
				
				ansContainers[i].style.color = 'lightgreen';
			}
			else{
				ansContainers[i].style.color = 'red';
			}
		}

		ansContainer.innerHTML = numCorrect + ' out of ' + qcontainer.length;
	}

	disQns(qcontainer, qzContainer);
	
	subBtn.onclick = function(){
		showResults(qcontainer, qzContainer, ansContainer);
	}

}