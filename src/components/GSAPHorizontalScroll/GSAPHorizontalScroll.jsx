import React, { useEffect } from 'react';
import './GSAPHorizontalScroll.css';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

const GSAPHorizontalScroll = ({ scroller, pageContainer }) => {

    useEffect(() => {
        if (scroller && pageContainer) {
            scroller.on("scroll", ScrollTrigger.update);
            ScrollTrigger.scrollerProxy(pageContainer, {
                scrollTop(value) {
                    return arguments.length
                        ? scroller.scrollTo(value, 0, 0)
                        : scroller.scroll.instance.scroll.y;
                },
                getBoundingClientRect() {
                    return {
                        left: 0,
                        top: 0,
                        width: window.innerWidth,
                        height: window.innerHeight
                    };
                },
                pinType: pageContainer.style.transform ? "transform" : "fixed"
            });

            window.addEventListener("load", function () {
                let pinWrap = document.querySelector(".all-sections");
                let pinWrapWidth = pinWrap.offsetWidth;

                gsap.to(".gsap-scroll-sections", {
                    scrollTrigger: {
                        scroller: pageContainer,
                        scrub: 2,
                        trigger: ".gsap-scroll-component",
                        pin: true,
                        start: "top top",
                        end: pinWrapWidth,
                        markers: true,
                    },
                    xPercent: -100 * (document.querySelectorAll(".sections").length - 1),
                    ease: "none"
                });

                ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll

                ScrollTrigger.refresh();
            });
        }
    }, [scroller, pageContainer])

    return (
        <div data-scroll-container className='gsap-scroll-component'>
            <div data-scroll-section className='gsap-scroll-sections'>
                <div className='all-sections'>
                    <div className='sections' data-scroll data-scroll-delay="0.12" data-scroll-position="top">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum est a deleniti doloremque, tempora maxime officiis beatae mollitia, voluptatem, magni cumque illo aliquam porro expedita! Neque eum architecto consequatur ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptate optio soluta sed perferendis suscipit consequuntur distinctio sit perspiciatis? Laborum minus tempora aspernatur sed voluptates dolorem placeat eveniet provident eligendi.
                        Ipsum accusamus corporis commodi quasi consequuntur vel minima perferendis vero natus est. Optio facere eveniet, praesentium debitis ratione tempora recusandae dolores, eum itaque ab fuga reiciendis harum, fugiat sunt ipsam.
                        Debitis molestiae illo suscipit. Molestias mollitia voluptatum magni non error eligendi reprehenderit, suscipit quos eaque dolorem dolore sunt laborum nam. Exercitationem ea necessitatibus est nemo? Ipsum, temporibus? Eaque, tenetur alias.
                        Rerum sit consequatur, praesentium at recusandae obcaecati tempora fugiat cupiditate animi sunt, quas, voluptatem nisi illo deleniti nulla! Optio facilis voluptatibus impedit neque culpa perspiciatis deleniti quod error ipsa repellat.
                        Omnis, sed repellendus rem libero architecto dolore explicabo amet? Corporis adipisci veritatis esse totam magni! Laborum illo esse quidem minima ipsam aspernatur odio! Maxime molestiae facere nemo quae laborum! Harum.
                        Voluptatum porro et magni qui quisquam sunt ex nesciunt officia, velit laboriosam facilis dicta asperiores fugit aperiam, provident modi repellat rerum esse veniam magnam aliquam quia quibusdam iste. Accusamus, voluptatem.
                        Esse, illum corporis. Magnam laborum, consequatur sed autem consectetur, cupiditate numquam, vero dolores aliquid unde delectus laudantium quas ipsum. Delectus illum rerum illo porro distinctio omnis similique aliquid enim ea.
                        Voluptates voluptatibus enim consequuntur nobis laborum doloremque commodi. Ipsum, facere molestiae harum impedit nostrum aut suscipit, sapiente tempore doloribus quos alias quam numquam earum iusto obcaecati a fugit, atque officiis.
                        Explicabo, et accusamus. Blanditiis, cumque id vitae error adipisci placeat magni, tempora pariatur voluptate optio vero ipsa veniam molestias accusamus. Qui a libero natus atque. Optio maiores dignissimos dicta modi?
                        Tenetur vero perspiciatis impedit. Quisquam, recusandae? Eaque minima sapiente, consectetur culpa dicta quis placeat quibusdam dolorum voluptates quasi non quia dignissimos magnam quisquam impedit! Voluptatum accusantium laudantium quisquam dolor eius.
                        Et ab ipsam molestias repudiandae facere laborum dicta corrupti commodi officia error aliquid accusantium culpa deserunt, iure natus tempora. Nihil, dolore deleniti neque optio ut corporis cum beatae ea at.
                        Ut veniam beatae quis cumque excepturi quae doloremque tenetur. Ea beatae quaerat, culpa error, natus officiis nulla adipisci ratione, inventore accusantium molestias quod dolorum hic fugit tempore optio! Officia, voluptatem!
                        Omnis blanditiis sequi adipisci nostrum provident saepe sunt nemo repudiandae fugiat commodi, aliquid molestias voluptatum voluptas? Dolorem velit repellat vel. Quis dolorum pariatur sint nisi ad alias rem ipsam voluptatibus!
                        Ex asperiores debitis hic error fugit, quae commodi doloremque, odit nobis eveniet dignissimos rerum ullam, sunt quia. Mollitia soluta aliquam tempora ea, nemo reiciendis ad facilis accusantium, molestias numquam accusamus!
                        Modi mollitia optio ad fuga quae animi deserunt eos, ducimus quibusdam eum laboriosam, magni quas vel, praesentium sequi laudantium error! Vel aut iure cumque ipsam doloribus asperiores sed commodi esse?
                        Perspiciatis culpa harum inventore aspernatur doloribus natus dolor provident rerum enim blanditiis expedita doloremque ducimus esse vitae eos aliquid quod magnam nisi quo, quis tempore laudantium? Quas facilis neque facere?
                    </div>

                    <div className='sections' data-scroll data-scroll-delay="0.12" data-scroll-position="top">
                        Quaerat sed eos harum voluptas perspiciatis debitis provident nesciunt, consequatur cum libero placeat distinctio nostrum iusto quibusdam nihil magnam, quo iste inventore minima perferendis voluptates quas quis vitae iure? Vero!
                        Quam maxime voluptates fuga animi dolorum pariatur officiis beatae culpa ipsa? Aliquid ex quod unde voluptate possimus ab omnis autem dolor aut aliquam pariatur corporis impedit eligendi exercitationem, repellat totam?
                        Beatae cum laborum corporis mollitia vero necessitatibus omnis libero quam error adipisci, quaerat sint fugiat tempore aut animi autem, perferendis illo suscipit? Quasi dicta tempora voluptatem, dolores nihil et maxime.
                        Rem, veniam? Vero vel mollitia eum sint dolore. Consequatur repellendus error beatae, quaerat similique sapiente, maxime expedita molestiae, natus impedit totam et aliquam molestias harum corrupti voluptates. Sapiente, temporibus beatae!
                        Incidunt, at, quas ipsam cupiditate ut a provident rem minima voluptas magnam placeat! Eos velit neque quis sunt quo fugiat, tempore tenetur delectus dignissimos reiciendis eligendi, officiis aliquid laboriosam earum?
                        Iure, ullam architecto vitae illo, qui officia est dignissimos ad voluptatum itaque dolor ea atque quam? Nulla, iste ad consequuntur, doloremque adipisci expedita optio dignissimos officia, quaerat ut quod harum!
                        Voluptate a asperiores deleniti reiciendis doloremque ea. Quasi totam repellendus veritatis nisi, exercitationem, suscipit hic aspernatur, culpa aliquam rem perferendis sequi laborum laudantium qui. Magnam dignissimos dolore voluptatibus veritatis fugiat.
                        Corrupti repellat incidunt nisi, dolorum laudantium labore, aspernatur quae hic reprehenderit numquam nobis. Earum, unde quae. Amet expedita pariatur saepe molestias debitis, accusantium sint itaque obcaecati, quo tenetur vitae ipsa.
                        Quibusdam, officiis est? Ab inventore minima ea consectetur animi? Vitae amet fugiat, corrupti accusamus quis harum consectetur molestias, magnam voluptatum ipsa quam soluta velit deserunt dignissimos. Voluptates blanditiis nam similique!
                        Sed tempore dicta a voluptatem? Consequatur quia iste delectus accusamus at enim veniam reprehenderit dolores corrupti, doloribus harum similique blanditiis facere vel expedita, porro magnam tenetur inventore. Aliquid, cupiditate reprehenderit.
                        Corporis error vero non aperiam recusandae dolor sed inventore eaque fuga fugit? Fuga ullam voluptatum eius quaerat aut doloremque, aliquam itaque! Animi ab recusandae cupiditate sequi esse quisquam voluptate autem.
                        Ullam, pariatur non fugit doloremque inventore corporis consectetur quam nulla alias reprehenderit, eligendi deleniti ducimus necessitatibus. Provident rerum, cum nesciunt, atque minus vitae incidunt voluptatibus, quisquam quidem laborum distinctio repudiandae!
                        Vitae reprehenderit ipsum pariatur iusto alias, inventore expedita unde temporibus, reiciendis explicabo sunt sit veritatis! Ut, fuga ipsa error itaque iure iste corrupti a ab, quo neque blanditiis doloribus aspernatur.
                        Accusantium, neque. Officia libero temporibus quod delectus dolores ad iure assumenda error, eaque facere dolore adipisci voluptates iusto ex ratione magnam tempore sed ea! Possimus dolorum placeat tenetur exercitationem commodi.
                        Quidem error, fuga veritatis tempore sunt natus doloremque possimus officiis in aliquam pariatur itaque iusto delectus facilis cum, maiores tempora culpa, dignissimos porro similique excepturi. Praesentium totam consequuntur ipsum illum.
                        Non autem placeat maiores eaque fugit ad at ut saepe dignissimos odio similique distinctio, eveniet quam eius rem, nam, ducimus asperiores. Odit eum nam molestias. Nulla ipsam accusantium ad amet.
                    </div>

                    <div className='sections' data-scroll data-scroll-delay="0.12" data-scroll-position="top">
                        Veritatis totam tempore aliquid, quas tempora deleniti hic eaque iste et odio! Laboriosam quam dolorum odit inventore consequatur voluptate, quia excepturi fugiat nemo temporibus cupiditate aspernatur vitae recusandae laudantium voluptatibus.
                        Dicta magni quod tenetur eveniet illo, officiis facilis dolor aspernatur iusto consequatur pariatur. Natus unde sunt animi mollitia, error voluptas dolorum tempora rem minima placeat excepturi perspiciatis delectus officia esse.
                        Ab minima quas tempore facilis sed totam reiciendis doloribus beatae suscipit expedita. Vitae consectetur similique praesentium debitis magnam libero consequuntur aperiam cumque sequi iusto nulla nemo assumenda, sapiente quia est?
                        Illo error quam distinctio eveniet nam, vitae, pariatur deleniti itaque sapiente totam eligendi quia nisi soluta, nostrum neque? Nostrum placeat amet fuga dignissimos voluptatum incidunt obcaecati tempore, delectus blanditiis minima?
                        Aliquam, nemo labore quod incidunt provident temporibus saepe et unde cumque iure ipsa eveniet expedita possimus, aperiam esse eius facilis dolorum odio, molestias fuga porro. Corrupti, unde nam? Magni, distinctio.
                        Optio, provident error ad ducimus culpa atque quibusdam laboriosam aspernatur eum voluptates placeat voluptate ipsum necessitatibus modi natus cupiditate illo. Tempora quasi perferendis quos dolore? Accusamus, corporis sequi? Optio, praesentium!
                        Eos, eligendi sunt cupiditate fugit harum necessitatibus dolorem quibusdam non soluta ipsa voluptas. Doloremque mollitia beatae eum velit sequi voluptatem repudiandae, laudantium blanditiis omnis, aspernatur rerum eaque autem ad? Nisi.
                        Fuga eveniet dicta mollitia aliquid. Voluptates quo deleniti maiores quam! Aliquam ea labore quam numquam, illum ab quisquam inventore commodi dolorum fugiat dolores sapiente iusto vel consequuntur asperiores ut atque.
                        Nihil, aspernatur! Iusto adipisci cupiditate magni error corrupti natus nisi, animi necessitatibus, vitae in eius. Minima fugiat odio quia sed earum cumque error unde, amet maxime pariatur? Recusandae, inventore unde!
                        Veniam eius dicta saepe quas, consequuntur ab nemo natus, cumque accusantium aperiam beatae harum perferendis sequi nostrum corrupti tempore modi animi dolorum autem. Ut, repellendus? Odio quisquam voluptas ducimus dolor.
                        Aperiam tempora animi consequatur quos quisquam quibusdam voluptatibus fugiat impedit consectetur ipsa! Voluptatum exercitationem harum maiores voluptas assumenda sunt nostrum debitis odit aliquid voluptates rem ex laborum, facilis, eum inventore.
                        Saepe ex maiores odit, facere delectus molestias cum ab, ullam harum modi aliquam quia aliquid a? Assumenda, rerum nostrum? Officiis harum accusantium quia odio, excepturi unde illo commodi in voluptatem!
                        Architecto aut, ipsa totam rerum vel pariatur quibusdam repudiandae quia fugit sed quidem distinctio fuga sit sunt eligendi error magnam veritatis. Ex beatae odio, facere qui incidunt facilis sequi praesentium?
                        Vel iusto porro voluptatem repudiandae praesentium, possimus id recusandae nam quo mollitia perspiciatis fugit quae velit neque quaerat dolorum facere ad ullam magni suscipit laudantium quam reiciendis iure? Quis, fugiat.
                        Ipsum suscipit soluta corrupti minima aut id fuga, voluptas aspernatur quaerat, ut hic nemo facere, pariatur ducimus officia dolorem laudantium expedita. Laborum, veniam rem. Magnam nemo est nulla alias! Alias?
                        Optio quis accusantium animi impedit, ipsa repellendus eius commodi quae quaerat temporibus excepturi soluta molestiae a nulla ex ea minus deserunt repellat eveniet? Ad maxime dignissimos voluptatem quaerat! Iure, architecto!
                        Quibusdam eius illo quidem ducimus facilis nemo molestias quaerat. Asperiores aliquid in illo quis ducimus, adipisci accusamus. Maiores officia quasi error, nam autem nostrum explicabo, dolorem, repudiandae esse rerum natus?
                    </div>

                    <div className='sections' data-scroll data-scroll-delay="0.12" data-scroll-position="top">
                        Minima ad explicabo dolores vero enim molestias dolorem hic? Quam fugit animi optio at veritatis assumenda voluptatibus iusto placeat iste et. Beatae similique tempora ab deleniti laborum quas neque dicta.
                        Excepturi quae soluta suscipit facere fuga molestiae doloremque corrupti aliquid culpa explicabo maiores, delectus vel ipsum laborum et eligendi assumenda fugiat enim adipisci voluptas facilis veniam, dolor quia asperiores? Facere.
                        Illum magni quaerat adipisci, sunt, explicabo ullam blanditiis deserunt molestias delectus exercitationem praesentium dicta culpa provident vel. Deleniti nam doloremque dolores est necessitatibus! Perspiciatis quasi doloremque fugiat minus maxime veniam!
                        Nemo, similique placeat. Eos doloremque animi, natus nesciunt sequi rerum modi corporis eum excepturi debitis omnis aperiam, dolorem officiis iure quibusdam provident quidem reprehenderit tenetur. Vel pariatur voluptatem qui in?
                        Delectus, quia iusto aut ut nam corporis ducimus architecto repellendus unde numquam dolorum culpa ipsum tempora similique. Saepe molestias molestiae eum sapiente consequatur hic repudiandae tenetur accusantium! Velit, enim magnam!
                        Eligendi, deleniti aliquam voluptates dicta odio autem ipsa vero eum quam excepturi, eius eos a nihil at tenetur quaerat rem quidem laudantium! Deserunt temporibus reprehenderit rem, a et corrupti quisquam.
                        Aliquam, possimus laboriosam. Pariatur delectus ipsa quis error tempora? Porro quo nobis, mollitia eum aliquid culpa sapiente est nesciunt ex quae cum consequatur nam deserunt error laudantium similique dolore tempora?
                        Eveniet ratione provident mollitia vitae. Inventore porro labore temporibus amet, eaque quos praesentium vero nisi nemo tenetur esse assumenda incidunt accusantium reprehenderit? Ratione consequatur tempore architecto, omnis porro sapiente. Architecto.
                        Minus deleniti autem facere numquam possimus facilis assumenda! Hic et nemo porro, inventore deserunt quia vero voluptatum dolore quae neque facilis? Eaque neque aliquid atque saepe fuga repudiandae totam error!
                        Necessitatibus voluptatibus asperiores autem excepturi nihil tempore qui. Dolore delectus magni tempora exercitationem ducimus, porro consequatur, sint itaque eius ipsa deserunt veniam explicabo? Minus asperiores, laboriosam necessitatibus recusandae inventore veritatis.
                        Praesentium, quod non nemo deserunt eius quae iure error temporibus in illo dolore sed expedita! Corporis facilis omnis quisquam tenetur quas alias totam. Consequuntur qui nobis, modi accusantium nisi id.
                        Facere saepe quam aut laudantium amet labore laboriosam adipisci assumenda mollitia nemo, molestias quis voluptatum. Animi labore, ab possimus, expedita ad nobis similique minima sapiente suscipit sint, eos nesciunt pariatur?
                        Voluptates, eius? Officia qui cumque doloribus cupiditate delectus sed reprehenderit consequuntur non sequi, sit natus, omnis nobis deserunt perspiciatis veritatis rerum quia porro id obcaecati. Maiores nemo recusandae consectetur fugit.
                        Culpa omnis nulla sunt est eius ad qui quibusdam nostrum blanditiis recusandae, sit molestias impedit libero eum error. Quo odit quibusdam adipisci quos repellat id pariatur voluptatum, iusto totam magnam.
                        Aliquid, perferendis quos mollitia minima, adipisci natus accusantium magni nostrum, laudantium ipsa ex labore officiis beatae delectus dolor laborum? Placeat, minima cupiditate. Sint, quos. Quasi facere eius earum nemo odit.
                        Iusto delectus id quos neque veniam beatae hic obcaecati optio impedit officiis. Voluptas aliquid libero quos tenetur mollitia iusto saepe facilis quis, labore voluptatibus rem molestiae modi impedit corporis ad.
                        Veniam optio, sequi nesciunt esse cumque magnam! Blanditiis, animi quaerat delectus corrupti iste consectetur quos, in totam aliquam, dolorum numquam rem quam incidunt praesentium alias illo deserunt voluptatibus laboriosam reprehenderit!
                    </div>

                    <div className='sections' data-scroll data-scroll-delay="0.12" data-scroll-position="top">
                        Ratione recusandae ducimus eaque necessitatibus cum debitis, harum doloremque delectus consequatur deleniti magnam enim quae qui, dolores odio aliquid tempore reiciendis sint nesciunt, dicta exercitationem architecto voluptatum. Sit, eveniet quo.
                        Atque beatae dolorum perspiciatis debitis cumque error animi voluptatem magni recusandae, tempore dolorem aperiam veritatis. Praesentium mollitia itaque illo, veniam ad quod voluptatibus? Libero aliquam, ad sit doloremque saepe possimus?
                        Voluptates impedit repudiandae numquam illo molestias. Maxime neque voluptate distinctio aliquam modi voluptatum quam ullam ab vero, eos officia et, odio accusamus fuga eveniet accusantium numquam dolorem blanditiis dolorum repellendus.
                        Sequi animi dolor voluptatem modi? Numquam quam tempore odio quo mollitia adipisci nesciunt distinctio sed error perferendis debitis labore illum architecto, earum ducimus. Ipsa sunt explicabo repudiandae quibusdam aperiam laborum.
                        Aliquid sint fugit amet modi iusto reiciendis corporis soluta facere ab nulla saepe odio deserunt, debitis architecto aperiam a temporibus. Tempore sequi saepe minus! Iusto quisquam officia ab numquam repellat.
                        Dicta, veniam, nam enim sed facilis ut esse numquam mollitia ullam repudiandae voluptatem cupiditate distinctio eum temporibus et aliquid natus rem. Nam est architecto dolores. Voluptas dicta illo saepe maxime.
                        Quam, laboriosam. Cumque quam magni consequuntur obcaecati ipsum quidem, possimus veniam est. Dolores quo, deleniti vitae facilis modi similique nam eligendi labore cupiditate eius. Sunt odio commodi quaerat magnam. Laudantium?
                        Harum, autem fugiat architecto illum incidunt accusamus dolor odit suscipit eius voluptas impedit culpa pariatur quam voluptatem accusantium eaque, neque laudantium? Aliquam dignissimos optio accusantium tenetur harum et, nisi unde.
                        Consectetur itaque dolorum expedita omnis excepturi numquam velit atque dignissimos mollitia quisquam aliquam repellat ad id accusamus, perferendis vitae enim ullam. Hic animi, ipsa consequuntur nihil ratione molestiae dignissimos dolorem.
                        Velit autem rerum amet fugit saepe magnam cum neque nisi modi esse, nobis repellat itaque sint natus eum perferendis error veritatis eius nesciunt quae tenetur provident. Saepe tempora cumque animi?
                        Molestias culpa quidem, a fugit beatae ratione consequatur sapiente tempora unde ullam omnis quae animi maiores nihil. Perferendis quis temporibus enim accusantium, quas hic nostrum molestiae in quia explicabo facilis.
                        Voluptate delectus tempora ipsa dolor, aliquid accusantium perspiciatis debitis cupiditate minima ipsam illo eaque, sed, praesentium magnam dolorum itaque quas nesciunt non? Nemo aliquam natus consequuntur odit, unde a maiores?
                        Consequatur sed eligendi debitis enim sit. Doloribus unde dolore quidem consequuntur nesciunt! Tempora adipisci hic est blanditiis impedit explicabo incidunt cupiditate eaque odit? Accusantium cupiditate magnam consequatur, a eligendi vitae!
                        Fugiat doloremque culpa soluta quis nostrum voluptas non odit quod dolore tempore perferendis dolores et voluptatibus quia vero quos quam, quae enim assumenda atque recusandae? Quisquam, quos voluptatum! Odio, veniam.
                        Quibusdam voluptas nisi rerum itaque adipisci minima voluptatum, molestias quo? Quos labore quo laboriosam, dolorum, sint incidunt qui, neque odio nihil omnis ullam! Ut voluptatibus reprehenderit minus repellat. Deleniti, iure.
                        Maxime earum qui molestiae iusto quidem delectus esse fuga nesciunt, hic amet. Possimus unde ea dolore pariatur sapiente, eius esse nesciunt harum ad sed error adipisci enim debitis? Corrupti, nobis.
                        Ipsam ratione vel explicabo, iste nesciunt animi nihil neque eaque voluptas perspiciatis natus id, molestias magni quo vero corporis, exercitationem dolores quod maxime ducimus! Ipsam voluptates eveniet magnam voluptas! Debitis!
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GSAPHorizontalScroll