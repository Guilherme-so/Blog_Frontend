import React from 'react'

function Loading(Component:any) {
  return function PostLoadingComponent({isLoading, ...props}:any){
    if(!isLoading) return <Component {...props} />

    return (
        <p className='spinner' />        
    )
  }
}

export default Loading