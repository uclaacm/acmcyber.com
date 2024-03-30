data = open('out/data','r').read().split('\n')
for i,line in enumerate(data):
    if len(line) > 5:
        data[i] = line.replace('"','',2)
with open('out/data-real','w') as f:
    f.write('\n'.join(data))
