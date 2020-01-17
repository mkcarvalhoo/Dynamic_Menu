export class MenuItem{

    public itens : any [] = [
        {
            "id": "menu-inicio",
            "text": "Home",
            "sref": "#",
            "icon": "icon icon-home"
        },
        {
            "id": "menu-sobre",
            "text": "Sobre",
            "sref": "#",
            "icon": "icon icon-home"
        },{
            "id": "menu-modelo",
            "text": "ADMIN",
            "sref": "#",
            "icon": "icon icon-home",
            "roles": [
                "adm"
            ],
            "submenu": [
                {
                    "id": "menu-usuario",
                    "text": "Nível Usuário/publico",
                    "sref": "app.mdadmin",
                    "icon": "icon icon-chemistry"
                },
                {
                    "id": "menu-adicionar",
                    "text": "Adicionar",
                    "sref": "app.mdadmin",
                    "icon": "icon icon-chemistry"
                }
            ]
        },
        {
            "id": "menu-ajuda",
            "text": "Ajuda",
            "sref": "#",
            "icon": "icon icon-home"
        }
    ];

    public itens2 : any [] = [
        {
            "id": "menu-ajuda",
            "text": "Outro Item",
            "sref": "#",
            "icon": "icon icon-home"
        },{
            "id": "menu-modelo",
            "text": "Teste",
            "sref": "#",
            "icon": "icon icon-home",
            "roles": [
                "adm"
            ],
            "submenu": [
                {
                    "id": "menu-usuario",
                    "text": "Nível Usuário/publico",
                    "sref": "app.mdadmin",
                    "icon": "icon icon-chemistry"
                },
                {
                    "id": "menu-adicionar",
                    "text": "Excluir",
                    "sref": "app.mdadmin",
                    "icon": "icon icon-chemistry"
                }
            ]
        }
    ];

    public getItens() : any [] {
        return this.itens;
    }

    public getItens2() : any [] {
        return this.itens2;
    }

}