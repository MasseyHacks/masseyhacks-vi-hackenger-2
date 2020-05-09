with open("base.html", encoding="utf8") as b:
    bP = b.read()
    for i in range(7):
        with open("page{}.html".format(i), encoding="utf8") as p:
            with open("out/out{}.html".format(i), "w", encoding="utf8") as o:
                o.write(bP.replace("{{innerPage}}", p.read()).replace("{{cdnBase}}", ""))
