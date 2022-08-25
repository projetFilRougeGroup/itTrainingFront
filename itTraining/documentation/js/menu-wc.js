'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">it-training documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminModule-8d880644bfbcd3b64d11d4290dcf5a0f180301a6a831741411d1ab5777cefb71857aecdec818e00e5af01fcb6f377e874fe235966839105a4dcf8518a5e6ff76"' : 'data-target="#xs-components-links-module-AdminModule-8d880644bfbcd3b64d11d4290dcf5a0f180301a6a831741411d1ab5777cefb71857aecdec818e00e5af01fcb6f377e874fe235966839105a4dcf8518a5e6ff76"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-8d880644bfbcd3b64d11d4290dcf5a0f180301a6a831741411d1ab5777cefb71857aecdec818e00e5af01fcb6f377e874fe235966839105a4dcf8518a5e6ff76"' :
                                            'id="xs-components-links-module-AdminModule-8d880644bfbcd3b64d11d4290dcf5a0f180301a6a831741411d1ab5777cefb71857aecdec818e00e5af01fcb6f377e874fe235966839105a4dcf8518a5e6ff76"' }>
                                            <li class="link">
                                                <a href="components/AheaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AheaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AlayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AlayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidemenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidemenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminRoutingModule.html" data-type="entity-link" >AdminRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-3478d39d3422748491b61bdf1e279427780d377e98e3087ea000ebc375a7ade748f215f23669ce692da9eff8345635035d1913ae7fc98d64502c3191d7c90d62"' : 'data-target="#xs-components-links-module-AppModule-3478d39d3422748491b61bdf1e279427780d377e98e3087ea000ebc375a7ade748f215f23669ce692da9eff8345635035d1913ae7fc98d64502c3191d7c90d62"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-3478d39d3422748491b61bdf1e279427780d377e98e3087ea000ebc375a7ade748f215f23669ce692da9eff8345635035d1913ae7fc98d64502c3191d7c90d62"' :
                                            'id="xs-components-links-module-AppModule-3478d39d3422748491b61bdf1e279427780d377e98e3087ea000ebc375a7ade748f215f23669ce692da9eff8345635035d1913ae7fc98d64502c3191d7c90d62"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AproposComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AproposComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CertificationsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CertificationsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactPublicComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactPublicComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateStagiaireComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateStagiaireComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ErrorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ErrorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormationDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormationDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormationListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormationListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormationsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormationsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InfosPratiquesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InfosPratiquesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InfrastructuresEtCybersecuriteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InfrastructuresEtCybersecuriteComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-6a5ade98e7f24344716c3f2b6c3c3602b0394862215efd9d394511d889a16393a1e907b051d64c82b66dc94f81472f7977ef4a01c01e2868b210b73197ab427d"' : 'data-target="#xs-components-links-module-AuthModule-6a5ade98e7f24344716c3f2b6c3c3602b0394862215efd9d394511d889a16393a1e907b051d64c82b66dc94f81472f7977ef4a01c01e2868b210b73197ab427d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-6a5ade98e7f24344716c3f2b6c3c3602b0394862215efd9d394511d889a16393a1e907b051d64c82b66dc94f81472f7977ef4a01c01e2868b210b73197ab427d"' :
                                            'id="xs-components-links-module-AuthModule-6a5ade98e7f24344716c3f2b6c3c3602b0394862215efd9d394511d889a16393a1e907b051d64c82b66dc94f81472f7977ef4a01c01e2868b210b73197ab427d"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LogoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FormationModule.html" data-type="entity-link" >FormationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FormationModule-94ef5df388ce992c685719c7e687ef8edd975a0dc6dce814cb94d3e0a36423a100aa9c8390924c8d974073773208595722cccdbf69ed55db11cb716988afb9eb"' : 'data-target="#xs-components-links-module-FormationModule-94ef5df388ce992c685719c7e687ef8edd975a0dc6dce814cb94d3e0a36423a100aa9c8390924c8d974073773208595722cccdbf69ed55db11cb716988afb9eb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FormationModule-94ef5df388ce992c685719c7e687ef8edd975a0dc6dce814cb94d3e0a36423a100aa9c8390924c8d974073773208595722cccdbf69ed55db11cb716988afb9eb"' :
                                            'id="xs-components-links-module-FormationModule-94ef5df388ce992c685719c7e687ef8edd975a0dc6dce814cb94d3e0a36423a100aa9c8390924c8d974073773208595722cccdbf69ed55db11cb716988afb9eb"' }>
                                            <li class="link">
                                                <a href="components/FAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FDeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FIndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FIndexComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FormationRoutingModule.html" data-type="entity-link" >FormationRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserModule-ad2a7929ffea620f1997fd86ff702e89f9ac65d68f80743e9ecc1e13f438c4d71759db47b1746e1604da8df78e020441b3b0c321b2093c9209b18b8a5e0998d6"' : 'data-target="#xs-components-links-module-UserModule-ad2a7929ffea620f1997fd86ff702e89f9ac65d68f80743e9ecc1e13f438c4d71759db47b1746e1604da8df78e020441b3b0c321b2093c9209b18b8a5e0998d6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-ad2a7929ffea620f1997fd86ff702e89f9ac65d68f80743e9ecc1e13f438c4d71759db47b1746e1604da8df78e020441b3b0c321b2093c9209b18b8a5e0998d6"' :
                                            'id="xs-components-links-module-UserModule-ad2a7929ffea620f1997fd86ff702e89f9ac65d68f80743e9ecc1e13f438c4d71759db47b1746e1604da8df78e020441b3b0c321b2093c9209b18b8a5e0998d6"' }>
                                            <li class="link">
                                                <a href="components/UAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UDeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UIndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UIndexComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserRoutingModule.html" data-type="entity-link" >UserRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AddFormationComponent.html" data-type="entity-link" >AddFormationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SolutionsComponent.html" data-type="entity-link" >SolutionsComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Formation.html" data-type="entity-link" >Formation</a>
                            </li>
                            <li class="link">
                                <a href="classes/Stagiaire.html" data-type="entity-link" >Stagiaire</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/FormationService.html" data-type="entity-link" >FormationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StagiaireService.html" data-type="entity-link" >StagiaireService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});