import moving from '../assets/moving.jpg'

export function Moved() {
  return (
    <div css={{ margin: '24px' }}>
      <h1>This site has moved!</h1>
      <p>
        Check out the new location <a href="https://www.joephela.com">here</a>.
      </p>
      <img src={moving} alt="moving trucks" />
    </div>
  )
}
