Hooks statments 
Use State 
Use Reader
Use Effects
Use Ref
Use Contents
Use Memo
Use CallBack
Use Context


Hum jese State change keri hoti context manage kerni hoti thi to uder functional componets ache kam ni ate the to usko solve kerne ke liye aya hooks statements.

ab new companies class components ko ab utna use ni kerti he ab vo hooks ko use kerti he hooks ak type ka magical function or special functions jo alag alag task ko kerne ka kam kerte he like {useState} ye states ko manage kerne ka kam kerta he .

{useState} = states ko change ya manage kerne ka kam kerta he .

{useEffects} = ye side stack ko manange kerne ka kam kerta he . example = jese agar muje apni website me api ko call kerna chata hu and me us data ko lena chata hu / ider ky hoga mera jo react ka main process function chara he chalega and side by side api se data bhi ajayega bina process stop huye / side stack me muje chalana he agr to uder use effect kam ayega .

{useRef} = ye kisi bhi dom element ko select kerne ka kam kerta he useRef basically reference leta he 

{useContext} = global context ko manage kerne ka kam jo kerta he vo useContext kerta he / ak type se simple cjizo ko bohat ache se manage kr leta he 

{useReducer} = basically complex logics ko manage kerta he 

{useMemo}{useCallBack} = in ka kam hota he optimizations like koi chiz bar bar re-render to ni horahi sari chize optimized way me to chal rahi he na ye sab manage kerne ka kam ye do no kerte he


--------------------------------------------------------------------------------

                                  {OR ASAN LANGUAGE ME}
*useState = state ko mange kerne ke liye 

*useEffects = side effects handle kerne ke liye (jaise API calls , DOM manupulations , events listners).

*useContext = global state ko consume karne ke liye without props drilling .

*useReducer = complex state management ke liye (Reduce jaise chhota version)

*useRef = mutable values hold kerne ke liye jo re-render trigger na karein , ya DOM access karne ke liye 

*useMemo & useCallback = optimization ke liye, unnecessary re-renders avoid karne ke liye .