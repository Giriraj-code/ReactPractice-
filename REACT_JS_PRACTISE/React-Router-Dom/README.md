React me in built routing ni hoti he , agar hume routing kervana hota he to hu React-router-dom ka use kerte he ye ak library he {Browser me history ko store ker ke rakhta he }

BroweserRouter = It is a declaritive router using the history API for client side routing 

GirirajPortfolio.com = /
GirirajPortfolio.com/Skills = /Skills
GirirajPortfolio.com/About = /About

# hash routing matlab hum server se hidden rakhte he 

MemoryRouter matlab it store all entries in memory 

Hume phele Browser Router se apne App ko wrap kerna hota he 
like this in main.jsx 
<BrowserRouter>
<App/>
</BrowserRouter>

Ab ak bar routing ka kam hogya main.jsx me to ab hume Routes banana he 

hume then App.jsx me ye routes bananahe jo Route ko contain kerega
<Routes>
<Route></Route>
</Routes>

MAJOR USE CASE is ke help me SPA banta he website means single page application

ye jo routing he ye to basic routing he hume to or bhi perna he like:
1>basic setup 
2>nested routes
3>dynamic routes
4>usernavigate
5>404 page