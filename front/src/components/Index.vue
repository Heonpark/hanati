<template>
  <div class="container">
    <!-- <h1>axios테스팅 코드입니다.[전세상품 정보입력]</h1>
    <input class="form-control" type="text" name="num1" placeholder="num1" v-model="num1"/><br>
    <input class="form-control" type="text" name="num2" placeholder="num2" v-model="num2"/><br>
    <input class="form-control" type="text" name="num3" placeholder="num3" v-model="num3"/><br>
    <input class="form-control" type="text" name="text1" placeholder="text1" v-model="text1"/><br>
    <input class="form-control" type="text" name="text2" placeholder="text2" v-model="text2"/><br>
    <input class="form-control" type="text" name="text3" placeholder="text3" v-model="text3"/><br><br><br>
    <button class="btn btn-primary" @click="testing">콘솔확인</button>

    <h1>전세상품추천</h1>
    {{text1 * text2 * text3}} -->
    <div class="col-5">
        <h1 style="font-size: 40px;">월세 vs 전세 계산기</h1>
        
    </div>
    <h5><span style="color: dodgerblue;">월세와 전세, 어느게 더 유리하지?</span> 대출을 받아서 전세를 사는 경우와 매월 월세를 내는 경우 비용을 비교해 드립니다.</h5>
    <br><br><br>
    <!-- <select class="form-control" name="search_cate_type" onchange="selectedBox(this)">
      <option value="0">-남자-</option>
      <option value="1">-여자-</option>
    </select> -->

  <div class="col-xs-2">
    <label class="customerlabel" for="cus_age">나이</label>
    <label class="customerlabel" for="cus_sex">성별</label>
    <label class="customerlabel" for="repayment">상환방법</label>
</div>

<div class="col-xs-2">
    <input class="form-control" type="text" name="cus_age" placeholder="나이" v-model="cus_age"/>
    <select class="form-control" name="cus_sex" onchange="selectedBox(this)" v-model="cus_sex" id="selectbox">
      <option value="0">남자</option>
      <option value="1">여자</option>
    </select>
    <!-- <input class="form-control" type="text" name="repayment" placeholder="상환방법을 선택하세요" v-model="repayment"/> -->
    <select class="form-control" name="repayment" onchange="selectedBox(this)" v-model="repayment" id="selectbox">
      <option value="0">만기일시상환</option>
      <option value="1">부분만기일시상환</option>
    </select>
    <br><br><br>
</div>

<div class="col-xs-2">
    <label class="customerlabel" for="ex1">상환금액</label>
    <label class="customerlabel" for="ex1">고객연봉</label>
    <label class="customerlabel" for="ex1">대출금액</label>
</div>
<div class="col-xs-2">
    <input class="form-control" type="text" name="repayment_money" placeholder="상환금액" v-model="repayment_money"/>
    <input class="form-control" type="text" name="cus_salary" placeholder="고객연봉" v-model="cus_salary"/>
    <input class="form-control" type="text" name="cus_loan" placeholder="대출금액" v-model="cus_loan"/><br><br><br>
</div>

<div class="col-xs-2">
    <label class="customerlabel" for="ex1">임차보증금</label>
    <label class="customerlabel" for="ex1">대출기간</label>
    <label class="customerlabel" for="ex1">거래은행</label>
</div>

<div class="col-xs-2">
    <input class="form-control" type="text" name="leasing_mortgage" placeholder="임차보증금" v-model="leasing_mortgage"/>
    <input class="form-control" type="text" name="month_loan_period" placeholder="대출기간" v-model="month_loan_period"/>
    <!-- <input class="form-control" type="text" name="bank_id" placeholder="주거래은행을 선택하세요" v-model="bank_id"/> -->
    <select class="form-control" name="bank_id" onchange="selectedBox(this)" v-model="bank_id" id="selectbox">
      <option value="1">하나은행</option>
      <option value="2">신한은행</option>
      <option value="3">우리은행</option>
      <option value="4">국민은행</option>
      <option value="5">농협</option>
      <option value="6">기업은행</option>
    </select>
    <br><br>
    </div>
  <div class="col-xs-2" id="loanbuttons">
    <button class="btn btn-xl" @click="testing" id="btn_loanpage">확인[콘솔]</button>
    <button class="btn btn-xl" @click="testing" id="btn_loanpage">취소</button>


<div>{{results[0]}}
  {{results[0].loan_img}}
  <!-- <ul class="list-group">
  <li class="list-group-item" v-for: "result in results">
              {{result.loan_img}}
            </li>
  </ul> -->
<img v-bind:src="results[0].loan_img" height="auto" width="auto">
</div>

  </div>

</div>

</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      
      cus_age: '',
      cus_sex: '',
      repayment: '',
      repayment_money: '',
      cus_salary: '',
      cus_loan: '',
      leasing_mortgage: '',
      month_loan_period: '',
      bank_id: '',
      loan_img:'',
      results: {}
    }
  },
  methods : {
    async testing() {
      const response = await AuthenticationService.testpost({ 
        cus_age : this.cus_age,
        cus_sex : this.cus_sex,
        repayment : this.repayment,
        repayment_money : this.repayment_money,
        cus_salary : this.cus_salary,
        cus_loan : this.cus_loan,
        leasing_mortgage : this.leasing_mortgage,
        month_loan_period : this.month_loan_period,
        bank_id : this.bank_id
      })
 
      console.log(response.data)
      this.results = response.data
      console.log(results)
      return results
    }
  }
}
</script>
<style>
.form-control{
  width: 33%;
  display: inline;
  font-size: 1.5rem;
}
h1{
 /* text-align: left; */
}
#selectbox{
  height: 3.1rem;
}
.customerlabel{
  width: 33%;
  font-size: 20px;
  text-align: left;
}
#btn_loanpage{
  background-color: dodgerblue;
  color: white;
  border-radius: 0;
}
#loanbuttons{
      text-align: left;
}
</style>
