// map :: Functor f => (a -> b) -> f a -> f b
const map = curry((fn, f) => f.map(fn));