<?php

namespace PMT\KanbanBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('PMTKanbanBundle:Default:index.html.twig');
    }
}
