var theQs = [
    {
        qns: "1. What is HTML?",
        ans: {
            a: 'HTML describes the structure of a webpage',
            b: 'HTML is the standard markup language mainly used to create web pages',
            c: 'HTML consists of a set of elements that helps the browser how to view the content',
            d: 'All of the mentioned'
        },
        rightAns: 'd'
    },
    {
        qns: "2. Who is the father of HTML?",
        ans: {
            a: 'Rasmus Lerdorf',
            b: 'Tim Berners-Lee',
            c: 'Brendan Eich',
            d: 'Sergey Brin'
        },
        rightAns: 'b'
    },
    {
        qns: "3. HTML stands for __________?",
        ans: {
            a: 'HyperText Markup Language',
            b: 'HyperText Machine Language',
            c: 'HyperText Marking Language',
            d: 'HighText Marking Language'
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