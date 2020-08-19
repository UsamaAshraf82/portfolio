import React, { useEffect, useRef, useState, useCallback } from 'react'
import Layout from '../components/layout'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

const IndexPage = props => {
  const [isArticleVisible, setIsArticleVisible] = useState(false)
  const [timeout, setTimeoutState] = useState(false)
  const [articleTimeout, setArticleTimeout] = useState(false)
  const [article, setArtcile] = useState('')
  const [loading, setLoading] = useState('is-loading')

  let wrapperRef = useRef()

  const setWrapperRef = node => {
    wrapperRef = node
  }

  const handleOpenArticle = article => {
    setIsArticleVisible(true)
    setArtcile(article)

    setTimeout(() => {
      setTimeoutState(true)
    }, 325)

    setTimeout(() => {
      setArticleTimeout(true)
    }, 350)
  }

  const handleCloseArticle = useCallback(() => {
    setArticleTimeout(false)
    setTimeout(() => {
      setTimeoutState(false)
    }, 325)

    setTimeout(() => {
      setIsArticleVisible(false)
      setArtcile('')
    }, 350)
  }, [])

  const handleClickOutside = useCallback(
    event => {
      if (wrapperRef && !wrapperRef.contains(event.target)) {
        if (isArticleVisible) {
          handleCloseArticle()
        }
      }
    },
    [handleCloseArticle, isArticleVisible]
  )

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading('')
    }, 100)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleClickOutside])

  return (
    <Layout location={props.location}>
      <div
        className={`body ${loading} ${
          isArticleVisible ? 'is-article-visible' : ''
        }`}
      >
        <div id="wrapper">
          <Header onOpenArticle={handleOpenArticle} timeout={timeout} />
          <Main
            isArticleVisible={isArticleVisible}
            timeout={timeout}
            articleTimeout={articleTimeout}
            article={article}
            changeArticle={handleOpenArticle}
            onCloseArticle={handleCloseArticle}
            setWrapperRef={setWrapperRef}
          />
          <Footer timeout={timeout} />
        </div>
        <div id="bg"></div>
      </div>
    </Layout>
  )
}

export default IndexPage
