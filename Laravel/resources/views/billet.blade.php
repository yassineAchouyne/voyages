<!DOCTYPE html>
<html>
<head>
    <title>Billet de bus</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }

        .ticket {
            width: 400px;
            padding: 20px;
            border: 2px solid #000;
            margin: 0 auto;
        }

        .ticket-header {
            text-align: center;
            margin-bottom: 20px;
        }

        .ticket-title {
            font-size: 24px;
            font-weight: bold;
        }

        .ticket-content {
            margin-bottom: 10px;
        }

        .ticket-info {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
        }

        .ticket-info span {
            font-weight: bold;
        }

        .ticket-barcode {
            text-align: center;
        }

        .ticket-barcode img {
            max-width: 100%;
        }
    </style>
</head>
<body>
    <div class="ticket">
        <div class="ticket-header">
            <h1 class="ticket-title">Billet de {{$libelle}}</h1>
        </div>
        <div class="ticket-content">
            <p class="ticket-info">
                <span>Date :</span>
                <span>{{$date}}</span>
            </p>
            <p class="ticket-info">
                <span>Heure :</span>
                <span>{{$heure}}</span>
            </p>
            <p class="ticket-info">
                <span>Lieu de départ :</span>
                <span>{{$lieuDebart}}</span>
            </p>
            <p class="ticket-info">
                <span>Lieu d'arrivée :</span>
                <span>{{$lieuArrive}}</span>
            </p>
            <p class="ticket-info">
                <span>Numéro de siège :</span>
                <span>{{$siege}}</span>
            </p>
            <p class="ticket-info">
                <span>Prix :</span>
                <span>{{$prix}} DH</span>
            </p>
        </div>
        <!-- <div class="ticket-barcode">
            <img src="barcode.png" alt="Barcode">
        </div> -->
    </div>
</body>
</html>
