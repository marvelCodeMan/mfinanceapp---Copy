import random
f = open('generate.txt','w')


s  = ''
cities = ['uttar_pradesh', 'bihar','madhya_pradesh','karnataka','gujarat','kerela','nagaland']

for i in range(0, 100):
    x=10+random.randint(0,4)+random.random()
    y = 10+random.randint(0,4)+random.random()
    if x>y:
        x,y = y,x
    s += f"{random.randint(20000, 30000)},{random.randint(40000, 60000)},{random.randint(6,12)},{x},{y},{random.randint(100000, 500000)},{cities[random.randint(0, len(cities)-1)]}"+'\n'
    f.write(s)
    s = ''


