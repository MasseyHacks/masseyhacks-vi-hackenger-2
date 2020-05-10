mapping = {
    0: "4j2MKqmn69PBANFJ9BS6NLrQzhToSeuuDKZ1Jlk8fG",
    1: "8inMwkP9w77Ma13KPP6yCYNHICITbgeocR5JPlkPk",
    2: "cYMfDvlDfMcjk4OWY1Ux51IhecKXZQc52ORL2jg5q",
    3: "douVDHSQG5jp1TQSJs5lpbUoP1U37lfrEhtj4yRTc",
    4: "lfVwEwqk6eceS1Kf3Zzuxkh00ZvSU2PgWGP5Vsjy1",
    5: "mXPp8pIgvYvYzFiAkQ8jhdZbF7NWE8nwL7iftapdE",
    6: "XjAu2SM7teKLPX8NV6BzHy4ERMXbutSisC2SgCpZo",
    7: "XZz3nZmuJmv0B4BObxgSLe47PIxE1LMRlxCIQ2Fip",
    8: "ZGxKpBWQwwAhBG96zTqodaZKUignhRqC78gNvizKT"
    }
with open("base.html", encoding="utf8") as b:
    bP = b.read()
    for i in range(9):
        with open("page{}.html".format(i), encoding="utf8") as p:
            with open("out/{}.html".format(mapping[i]), "w", encoding="utf8") as o:
                o.write(bP.replace("{{innerPage}}", p.read()).replace("{{cdnBase}}", ""))
