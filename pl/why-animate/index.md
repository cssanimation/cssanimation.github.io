---
layout: post
title: Dlaczego animować?
bodyClass: shorter
demo_url: https://cssanimation.rocks/demo/starwars
description: Dlaczego animacje działają tak dobrze i jak można je wykorzystać do poprawienia projekt&oacute;w sieciowych.
categories: [css, theory]
imageURL: /images/posts/why-animate/home.png
home_image: /images/posts/why-animate/home.png
tweet_text: Dlaczego animacje mogą poprawić projekty sieciowe
translator: Mateusz Kurlit
---

Patrząc na płomienie ognia, oglądając fale rozbijających się o brzeg morza lub obserwując spojrzenie tygrysa zamierzającego się rzucić, wiemy że świat jest w ruchu.

Jesteśmy naprawdę dobrzy w dostrzeganiu i reagowaniu na ruch. Jest ściśle związany z naszymi m&oacute;zgami i jest ważną częścią tego jak postrzegam świat wok&oacute;ł nas.

Kiedy siadamy i projektujemy stronę internetową, tworzymy coś co będzie się komunikowało z naszymi odwiedzającymi. Animacje są jednym ze sposob&oacute;w na wykonanie tego.

## Komunikacja

Często podczas projektowania stron internetowych możemy zastanawiać się nad treścią, układem, stylami, czcionkami i kolorami. Ale możemy r&oacute;wnież komunikować się przez ruch. Zamiast rozpatrywać animacji jako czegoś odrębnego w procesie projektowania, możemy traktować obiekty w ruchu jako inny aspekt w naszych projektach, kt&oacute;ry działa i komunikuje się r&oacute;wnolegle z wszystkim innym.

Wszystkie te rzeczy łączą się, aby stworzyć naszą markę i wrażenia, kt&oacute;re będą tego warte.

Mamy nadzieję, że nasze projekty efektywnie przedstawiają treść, wielką dbałość o szczeg&oacute;ły i zadowalają naszych odwiedzających. Ponieważ nasi goście zauważają i rozumieją ruch, animacja jest ważnym i potężnym narzędziem.

## Skromne początki

Prosty przykład animacji, kt&oacute;rą widzimy wszędzie jest efekt najechania. Zachwycanie się teraz tą prostą koncepcją jest dziwne, ale gdy została przedstawiona pierwszy raz, było to wielkie wydarzenie.

Kiedy sieć nabierała kształt&oacute;w, mieliśmy dokumenty połączone za pomocą hiperłączy. Chcąc wyr&oacute;żnić tekst od łącza, nadawano tym drugim niebieski kolor i podkreślano. Kursor zmieniał się r&oacute;wnież na styl `pointer`.

Po kliknięciu zmieniały kolor na fioletowy, aby pokazać, że zostały aktywowane lub p&oacute;źniej, że były już odwiedzone. Kolory były wykorzystywane do informowania o statusie łącza. Sprawy miały się naprawdę dobrze.

Potem pojawił się CSS. Na [początku 1998](http://www.w3.org/TR/WD-CSS2-971104/cover.html "w3 specification for CSS 2") pojawił się selektor `:hover.` Nagle mogliśmy zrobić znacznie więcej. Zamiast polegać na nagłej zmianie kursora, mogliśmy nałożyć style na samo łącze, gdy kursor znajdował się nad nim.

    a:hover {
      color: red;
    }

Za pomocą tej małej zmiany, komunikowaliśmy więcej. Lista łączy stała się interaktywnym placem zabaw,gdy radośnie przesuwaliśmy nasze kursory, uzyskując błyskawiczną informację zwrotną od kolor&oacute;w łączy.

To nie była tylko zabawa. Zmiana koloru daje więcej informacji o tym co się dzieje na ekranie. Ludzie doskonale dostrzegają ruch lub zmianę obiekt&oacute;w, korzystając z dodatkowych informacji. Ale możemy więcej.

## Przekazywanie więcej informacji

Zamiast zatrzymać się na zmianie koloru, możemy dodać r&oacute;wnież animacje. Animowanie zmiany koloru daje naszym oczom większą szansę na zauważenie zmiany, ponieważ przyciąga wzrok na dłuższą chwilę Łatwiej dostrzec animowaną niż nagłą zmianę.

    a {
      transition: color 0.2s;
    }
    a:hover {
      color: red;
    }

Dzięki temu możemy dodać przejście do kotwicy CSS. Po najechaniu na łącze, przeglądarka będzie animowała kolor tekstu z niebieskiego (lub fioletowego) do czerwonego przez okres 0.2 sekundy.

## Idąc dalej

Być może to nie wiele, ale te proste narzędzia otwierają świat komunikacji, kt&oacute;ry możemy wykorzystać, aby tchnąć życie w nasze projekty.

Dzięki możliwości przekazywania informacji za pośrednictwem ruchu, możemy przyciągnąć uwagę do odświeżonych obszar&oacute;w strony, zakomunikować dodanie lub usunięcie treści, pokazać naszym odwiedzającym na co robić dalej i znacznie więcej.

Niekt&oacute;re sposoby animacji mogą dodać wartość do projektu:

- Podświetlanie interaktywnej treści
- Dodawanie i usuwanie treści
- Opowiadanie historii
- Przyciąganie uwagi
- Wiarygodność
- Znakowanie i zabawa

### Podświetlanie interaktywnej treści

Najeżdżanie na łącza jest jednym sposobem na dodanie wartości, ale może p&oacute;jść dalej. Wskaz&oacute;wki, zmiana styl&oacute;w i inne zmiany wizualne mogą znacznie ożywić strony i nakłonić odwiedzających do wybierania, naciskania lub inaczej wchodzenia w interakcję z treścią. Obszary mogą się rozwijać lub podświetlać po kliknięciu, biało-czarne obrazy mogą zmienić się w kolorowe i znacznie więcej.

### Dodawanie i usuwanie treści

Jeśli treść na stronie nagle pojawia się lub znika, możemy do dostrzec. Ale to wszystko co wiemy. Nie wiem, gdzie się teraz znajduje i dlaczego zniknął. To jest okazja, aby dodać małą animację.

Dodawanie dodatkowego wiersza do list zadań, suwaka w panelu sterowania lub minimalizowania treści do rogu strony, wszystko to korzysta z animacji. Pokazując skąd elementy pochodzą i gdzie są przenoszone, nasi odwiedzający utrzymują połączenie ze stroną i lepiej rozumieją jak działa.

### Opowiadanie historii

Nie jesteśmy ograniczeni do tekstu lub nieruchomych obraz&oacute;w na naszych stronach internetowych. Przesuwając elementy, dodając nowe elementy lub usuwając je, możesz wziąć gości w podr&oacute;ż i dostarczyć im więcej informacji.

Strona domowa [Mailchimp](http://mailchimp.com) jest tego dobrym przykładem. Na środku ekranu wykorzystali kilka element&oacute;w HTML i kilka animacji CSS, aby wytłumaczyć jak się buduje emaile.

Kiedyś mogliśmy stworzyć coś takiego za pomocą Flash, ale teraz możemy wykonać to samo bez polegania na wtyczkach i jednocześnie sprawiając, że nasza strona będzie szybka, łatwo dostępna i elastyczna.

### Przyciąganie uwagi

Jesteśmy świetni w dostrzeganiu rzeczy zmieniających się wizualnie. Ta cecha jest czymś co możemy wykorzystać do przyciągania uwagi do określonych obszar&oacute;w. Powszechnym zastosowaniem tego może być aktualizacja treści na stronie, kt&oacute;ra będzie migać lub zmieniać kolor.&nbsp;

Możemy p&oacute;jść dalej i sprawić, że nasz przycisk rejestracji będzie się delikatnie trząsł po załadowaniu strony m&oacute;wiąc &quot;hej, jestem ważny&quot; lub sugerowany artykuł wlatuje z boku ekranu kiedy odwiedzający dotrze do końca poprzedniego.

Dbając o to, animacja jest bardzo potężnym sposobem na przyciągnięcie uwagi do tego co chcemy.

### Wiarygodność

Czymś rzadziej branym pod uwagę jest efekt jaki dobra animacja wywiera na odwiedzających naszą stronę, jeżeli chodzi o zaufanie. Jeśli dostrzegasz interakcję z swoim systemem operacyjnym, istnieje wiele subtelnych animacji. Okna pojawiając, zanikając, minimalizując lub maksymalizując się pomagają zrozumieć komputer.

Kiedy projektujemy strony internetowe często zapominamy o tym i tworzy coś płaskiego. Animacje mogą sprawić, że interakcje strony wyglądają lepiej.

W [artykule na Medium.com](https://medium.com/@michaelvillar/improve-the-payment-experience-with-animations-3d1b0a9b810e "Improve the payment experience with animations"),&nbsp;Micha&euml;l Villar wyjaśnia jak proces zakupu Stripe używa animacji, aby pom&oacute;c użytkownikowi zar&oacute;wno w finalizacji zam&oacute;wienia, ale r&oacute;wnież w zaszczepieniu zaufania.

> &quot;Niesamowite dopracowanie tej animacji zwiększa og&oacute;lne wrażenia użytkowania przekazując poziom doskonałości&nbsp;i dbałości o szczeg&oacute;ły, kt&oacute;remu nie można się oprzeć tylko zaufać&quot;

Za pomocą właściwego stylu, animacje mogą sprawić, że użytkownik czuje, że używa nowoczesnego UI.

### Znakowanie i zabawa

Kiedy [Yahoo!](http://yahoo.com "Yahoo") przechodził dużą zmianę marki w 2013, dodano subtelne animacje do każdego logo strony internetowej. Dążąc do przekazania poczucia radości, przyciągnęli uwagę do zmiany i sprawili, że ludzie o tym m&oacute;wili.

Strona prawdopodobnie już ich nie ma, ale możesz znaleźć przykłady animacji na [stronie&nbsp;Astronaut Love](http://astronautlove.tv/yahoo-rebrand-yahoo/ "Examples of the Yahoo! logos being animated").

Kiedy Stripe używa animacji, robi to na odpowiednim poziomie, kt&oacute;ry ludzie (i deweloperzy rozważający skorzystanie z ich usług) wiążą z ich nazwą. W obu przypadkach, animacja pomaga przyciągnąć uwagę i wzmocnić ich markę.

Animacje mogą być r&oacute;wnież zabawą. Na [Hop.ie](http://hop.ie "Hop.ie") stworzyłem postać imieniem &quot;bouncer&quot;, kt&oacute;ry wskakuje z lewej strony pełniąc rolę loga. Zachowując bardzo prosty wygląd strony, skoczek posiada r&oacute;wnież kotwicę, kt&oacute;ra prowadzi do strony domowej. Nie ma tutaj potrzeby animacji, ale myślę, że to podnosi trochę ton. Nie ma nic złego w odrobinie zabawy.

## Wielka moc, wielka odpowiedzialność

Animacja to potężne narzędzie. Podobnie jak łatwo wpatrywać się w płonący ogień, trudno nam ignorować animacje. Niekt&oacute;rzy ludzie uważają, że jest to niemożliwe.

Rozważając spos&oacute;b używania animacji w swoich projektach, pamiętaj, że jest to narzędzie komunikacji. Powinny być wykorzystywane oszczędnie i nigdy nie wchodzić w drogę treści lub interakcji.

Nieprzyjemnie słuchać wielu ludzi rozmawiających jednocześnie lub pr&oacute;bować skupić się w głośnym środowisku. Zbyt wiele animacji tworzy wizualny hałas, kt&oacute;ry rozprasza i utrudnia życie twoim gościom. Mając to na uwadze, zawsze staraj się ograniczać użycie animacji, aby były subtelne.

## Dlaczego animować teraz?

Nigdy nie było lepszego czasu na wprowadzenie animacji do procesu projektowania. Przeglądarki stają się coraz lepsze, urządzenia bardziej potężne, a my dostajemy lepsze narzędzia do tworzenia animacji.

Korzystanie z animacji wymaga oceny. Jeśli chcesz być dobry w używaniu animacji do wyr&oacute;żniania treści, poprawiania konwersji lub og&oacute;lnie doskonalenia marki, nadszedł czas, aby zacząć.&nbsp;
