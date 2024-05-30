import './PageTransition.style.css'

const PageTransition = () => {
    document.querySelector('body').classList.add('page-transition')
    setTimeout(() => {
        document.querySelector('body').classList.remove('page-transition')
    }, 1001)
}

export default PageTransition