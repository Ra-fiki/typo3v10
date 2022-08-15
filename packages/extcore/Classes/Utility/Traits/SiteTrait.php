<?php

namespace RK\Extcore\Utility\Traits;

use Throwable;
use TYPO3\CMS\Core\Context\AspectInterface;
use TYPO3\CMS\Core\Context\Context;
use TYPO3\CMS\Core\Context\Exception\AspectNotFoundException;
use TYPO3\CMS\Core\Error\Http\PageNotFoundException;
use TYPO3\CMS\Core\Http\ImmediateResponseException;
use TYPO3\CMS\Core\Site\Entity\Site;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Frontend\Controller\ErrorController;

trait SiteTrait
{
    /**
     * @return Site
     */
    final protected function getSite(): Site
    {
        return $GLOBALS['TYPO3_REQUEST']->getAttribute('site');
    }

    /**
     * @return Site
     * @throws AspectNotFoundException
     */
    final protected function getActLang()
    {
        $context = GeneralUtility::makeInstance(\TYPO3\CMS\Core\Context\Context::class);
        return $context->getPropertyFromAspect('language', 'id');
    }

    /**
     * @param int|null  $feGroup
     * @param bool|null $returnUserAspect
     *
     * @return bool|AspectInterface
     * @throws AspectNotFoundException
     */
    final protected function IfAuthenticated(?int $feGroup = null, ?bool $returnUserAspect = null)
    {
        /** @var  Context $context */
        $context = GeneralUtility::makeInstance(Context::class);
        if ($context->getPropertyFromAspect('frontend.user', 'id', 0) < 1) {
            return false;
        }
        if ($feGroup) {
            $userFeGroups = $context->getPropertyFromAspect('frontend.user', 'groupIds');
            if (!in_array($feGroup, $userFeGroups)) {
                return false;
            }
        }
        if ($returnUserAspect) {
            return $context->getAspect('frontend.user');
        }
        return true;
    }

    /**
     * @param $msq
     *
     * @return Site
     * @throws ImmediateResponseException
     * @throws PageNotFoundException
     */
    final protected function redirectToErrorPage($msq)
    {
        /** @var ErrorController $response */
        $response = GeneralUtility::makeInstance(ErrorController::class)->pageNotFoundAction(
            $GLOBALS['TYPO3_REQUEST'],
            $msq
        );
        throw new ImmediateResponseException($response, 1591428020);
    }

    /**
     * @param            $logger
     * @param Throwable  $t
     *
     * @throws ImmediateResponseException
     * @throws PageNotFoundException
     */
    private function throwInternalError($logger, Throwable $t)
    {
        $logger->debug($t->getMessage() . ' ' . $t->getFile() . ' ' . $t->getLine());
        $this->redirectToErrorPage($t->getMessage());
    }
}
