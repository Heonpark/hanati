<template>
  <div id="app">
    <Header/>
    <main-page0/>
    <main-page-footer/>
    <Index/>
    <loan-page-footer/>
    <main-page2/>
    <main-page3/>
    <main-page4/>
    <main-page5/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import Index from './components/Index'
import LoanPageFooter from './components/LoanPageFooter'
import MainPage0 from './components/MainPage0'
import MainPageFooter from './components/MainPageFooter'
import MainPage1 from './components/MainPage1'
import MainPage2 from './components/MainPage2'
import MainPage3 from './components/MainPage3'
import MainPage4 from './components/MainPage4'
import MainPage5 from './components/MainPage5'
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
    Header,
    Index,
    LoanPageFooter,
    MainPage0,
    MainPageFooter,
    MainPage1,
    MainPage2,
    MainPage3,
    MainPage4,
    MainPage5,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
