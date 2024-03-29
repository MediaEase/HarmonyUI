<?php

declare(strict_types=1);

namespace App\Controller\Api;

use App\Repository\ServiceRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/api/me/my_apps', name: 'api_me_')]
#[IsGranted('ROLE_USER')]
final class UserAppsController extends AbstractController
{
    public function __construct(
        private ServiceRepository $serviceRepository
    ) {
    }

    #[Route('', name: 'my_apps', methods: ['GET'])]
    public function getMyApps(): Response
    {
        $services = $this->serviceRepository->findBy(['user' => $this->getUser()]);
        usort($services, static function ($a, $b): int {
            return strcmp($a->getName(), $b->getName());
        });

        return $this->json($services, Response::HTTP_OK, [], ['groups' => 'services:info']);
    }
}
